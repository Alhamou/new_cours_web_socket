function joinRoom(endPoint){

    nsSocket.emit('joinRoom', endPoint);
 
    nsSocket.on('msgToClients', function(msgFromServer){

        $('.box_message').append(newHtmlMessage(msgFromServer));
        $('#chat_msg').val('');
    
        // go to last Message.
        const box_msg = document.querySelector('.box_message');
        box_msg.scrollTo(0, $('.box_message').prop('scrollHeight'));
    
    });
    
    nsSocket.on('updateNumberCountUser', function(updateUser){
        $('#online_room').text(updateUser);
    });


    $('.room').click(function(e){
        if( $(e.target).hasClass('room')){
            $(e.target).addClass('active_room').siblings().removeClass('active_room');

            $('.name_nameSpace').text($(e.target).find('.title_room').text());

           nsSocket.emit('joinRoom', $(e.target).find('.title_room').text());
        }
    });


    nsSocket.on('chat_history', function(history){

        $('.box_message').empty();

        history.forEach(function(msgs){
            
            $('.box_message').append(newHtmlMessage(msgs));
            
            const box_msg = document.querySelector('.box_message');
            box_msg.scrollTo(0, $('.box_message').prop('scrollHeight'));
        });
    });


}



