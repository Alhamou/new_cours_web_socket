

const socket = io('http://localhost:3600');

let nsSocket = '';

socket.on('nsList', (nsList) => {


    $('#namespaces').empty();
    nsList.forEach(d => {
        $('#namespaces').append(`<img ns="${d.endpoint}" src="${d.img}" class="endpoint">`);
    });


    $('.endpoint').on('click',function(e){
        
        joinNs($(e.target).attr('ns'));

        $(e.target).addClass('ns_avtive').siblings().removeClass('ns_avtive');

    });

    joinNs('/wiki');


    $('#form_msg').submit(function(e){

        e.preventDefault();
        
        // send the message to the Server.
        nsSocket.emit('msg_chat', {text: $('#chat_msg').val()});

    });


});

 

