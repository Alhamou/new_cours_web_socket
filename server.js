const express = require('express');
const socket = require('socket.io');


const app = express();

app.use( express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.sendFile('index.halo');
});

const server = app.listen(3500);
const io = socket(server);

io.on('connect', socket =>{

   socket.on('form', data =>{
       io.emit('resend_msg', data);
   });

});