const express = require('express');
const socket = require('socket.io');
const namespaces = require('./data/namespaces');
const app = express();

const port = 3600;
const server = app.listen(port, ()=>{
    console.log(`Server run on Port: ${port}`);
});
const io = socket(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});



// Main Socket io.
io.on('connection', function(socket){

    const nsData = namespaces.map(ns=>{
        return{
            img:ns.img,
            endpoint: ns.endpoint
        }
    });

    socket.emit('nsList', nsData);
    
});



//////////////////////////////////////
////////// NameSpace Block ///////////
//////////////////////////////////////


namespaces.forEach(function(namespace){

    
    io.of(namespace.endpoint).on('connection', function(nsSocket){
        
        // Count all clients connected to namespace '/chat':
        const nspSockets = io.of(namespace.endpoint).sockets;
        const count_rooms =Object.keys(nspSockets).length;


        nsSocket.emit('nsRoomsLoad', namespace.rooms, count_rooms);


        nsSocket.on('joinRoom', function(joinRoom){

            // JOIN to a Room.

            let roomTitle = Object.keys(nsSocket.rooms)[1];

            nsSocket.leave(roomTitle);

            nsSocket.join(joinRoom);
            

            const chat_history = namespace.rooms.find(h => {
                return h.roomTitle === joinRoom;
            });

            // console.log(joinRoom);
            nsSocket.emit('chat_history', chat_history.history);

            // update Online Current of members in Room.
            io.of(namespace.endpoint).to(joinRoom).clients((error, clients) =>{
                io.of(namespace.endpoint).emit('updateNumberCountUser', clients.length);
            });

        });

        nsSocket.on('msg_chat',function(msg){

            const fullMsg = {
                img: 'https://loremflickr.com/320/240/brazil,rio',
                username: 'Emad',
                date: Date.now(),
                msg: msg.text
            };

            let roomTitle = Object.keys(nsSocket.rooms)[1];
            // console.log(Object.keys(nsSocket.rooms));

            const nsRoom = namespace.rooms.find(r => {return r.roomTitle === roomTitle});
            nsRoom.addHistory(fullMsg);

            
            // send message to specific ROOM NAME with .TO(ROOM_NAME).
            io.of(namespace.endpoint).to(roomTitle).emit('msgToClients', fullMsg);
        });

   
    });
});


