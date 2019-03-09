const express = require('express');
const socket = require('socket.io');
const nsList = require('./data/namespaces');
const app = express();

const server = app.listen(3500);
const io = socket(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});



// Main Socket io.
io.on('connection', function(socket){

    const nsData = nsList.map(ns=>{
        return{
            img:ns.img,
            endpoint: ns.endpoint
        }
    });

    // Count all clients connected to server:
    const count_all = Object.keys(io.sockets.sockets).length;
    const chat_history = nsList[0].rooms[0].history;

    socket.emit('nsList', nsData,count_all, chat_history);

    
});



//////////////////////////////////////
////////// NameSpace Block ///////////
//////////////////////////////////////


nsList.forEach(function(namespace){

    
    io.of(namespace.endpoint).on('connection', function(nsSocket){
        
        // Count all clients connected to namespace '/chat':
        const nspSockets = io.of(namespace.endpoint).sockets;
        const count_rooms =Object.keys(nspSockets).length;




        nsSocket.emit('nsRoomsLoad', nsList[0]/*change hear Rooms*/.rooms, count_rooms);


        nsSocket.on('joinRoom', function(joinRoom, callback){

            // JOIN to a Room.
            nsSocket.join(joinRoom);
            

            // update Online Current of members in Room.
            io.of('/wiki').to(joinRoom).clients((error, clients) =>{
                io.of('/wiki').emit('updateNumberCountUser', clients.length);
            });


        });

        let roomTitle = '';
        nsSocket.on('msg_chat',function(msg){

            const fullMsg = {
                img: 'https://loremflickr.com/320/240/brazil,rio',
                username: 'Emad',
                date: Date.now(),
                msg: msg.text
            };

            roomTitle = Object.keys(nsSocket.rooms)[1];
            const nsRoom = namespace.rooms.find(r => {return r.roomTitle === roomTitle});
            nsRoom.addHistory(fullMsg);


            // send message to specific ROOM NAME with .TO(ROOM_NAME).
            io.of(namespace.endpoint).to(roomTitle).emit('msgToClients', fullMsg);
        });


       
        
       
    });
});


