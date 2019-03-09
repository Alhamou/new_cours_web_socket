
function joinNs (endPoint){

    nsSocket = io(`http://localhost:3500${endPoint}`);

    let room_id = 0;


    nsSocket.on('nsRoomsLoad', function(rooms,rooms_users_onlin){

        // update the count users of rooms 
        $('#rooms_users_onlin').text(rooms_users_onlin);

        $('#rooms').empty();
        rooms.forEach(room => {
            let p = room.private ? 'true' : 'false';
            $('#rooms').append(`<li ri="${room.id}" class="room"><span class="title_room">${room.roomTitle}<span class="icon_room badge badge-secondary">${p}</span></span></li>`);
        });

        $('.room').click(function(e){
            if( $(e.target).hasClass('room')){

                // rename room ID to send it to Server.
                room_id = $(e.target).attr('ri');

                $(e.target).addClass('active_room').siblings().removeClass('active_room');
            }
        });

        joinRoom($('.room:first-child').text());
        
    });

    $('#form_msg').submit(function(e){
        e.preventDefault();
        nsSocket.emit('msg_chat', {text: $('#chat_msg').val()}, room_id);
    });

    nsSocket.on('msgToClients', function(msgFromServer){

        $('.box_message').append(newHtmlMessage(msgFromServer));
        $('#chat_msg').val('');
    })
}

function newHtmlMessage (msg){

    const covTime = new Date(msg.date).toDateString();
    const newHtml = `

    <div class="box_msg">
        <div class="div_msg_img">
            <img class="msg_img" src="${msg.img}" alt="avatar">
        </div>
            <div>
                <p class="msg_username">${msg.username} <small>${covTime}</small></p>
                <p class="text_msg_publich">${msg.msg}</p>
        </div>
    </div>
    `
    return newHtml;
}