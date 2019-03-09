const express = require('express');
const socket = require('socket.io');
const nsList = require('./data/namespaces');

const app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const server = app.listen(3500);
const io = socket(server);


// main Socket io.
io.on('connection', function(socket){

    const nsDate = nsList.map(ns=>{
        return{
            img:ns.img,
            endpoint: ns.endpoint
        }
    });

    // Count all clients connected to server:
    var srvSockets = io.sockets.sockets;
    const count_all = Object.keys(srvSockets).length;
    
    socket.emit('nsList', nsDate,count_all);
});


// NameSpace Block.
nsList.forEach(function(namespace){

    io.of(namespace.endpoint).on('connection', function(nsSocket){
        
        // Count all clients connected to namespace '/chat':
        const nspSockets = io.of('/wiki').sockets;
        const count_rooms =Object.keys(nspSockets).length;


        nsSocket.emit('nsRoomsLoad', nsList[0].rooms, count_rooms);


        nsSocket.on('joinRoom', function(joinRoom, callback){
            nsSocket.join(joinRoom);

            io.of(namespace.endpoint).in(joinRoom).clients((error, clients) => {
                if (error) throw error;
                callback(clients.length);
              });

        });



        nsSocket.on('msg_chat',function(msg){

            const fullMsg = {
                img: 'https://image.com',
                username: 'Emad',
                date: Date.now(),
                msg: msg.text
            }

            const roomTitle = Object.keys(nsSocket.rooms)[1];
            io.of('/wiki').to(roomTitle).emit('msgToClients', fullMsg);
            
        })
        
    });
});


