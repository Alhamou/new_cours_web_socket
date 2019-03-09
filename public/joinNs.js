
function joinNs (endPoint){

    nsSocket = io(`http://localhost:3500${endPoint}`);




    nsSocket.on('nsRoomsLoad', function(rooms,rooms_users_onlin){

        // update the count users of rooms 
        $('#rooms_users_onlin').text(rooms_users_onlin);

        $('#rooms').empty();
        rooms.forEach(room => {
            let p = room.private ? 'true' : 'false';
            $('#rooms').append(`<li class="room "><span class="title_room">${room.roomTitle}<span class="icon_room badge badge-secondary">${p}</span></span></li>`);
        });

        $('.room').click(function(e){
            if( $(e.target).hasClass('room')){
                $(e.target).addClass('active_room').siblings().removeClass('active_room');
            }
        });

        joinRoom($('.room:first-child').text());
        
    });

    $('#form_msg').submit(function(e){
        e.preventDefault();
        nsSocket.emit('msg_chat', {text: $('#chat_msg').val()});
    });

    nsSocket.on('msgToClients', function(msgFromServer){

        $('.box_message').append(newHtmlMessage(msgFromServer));
    })
}

function newHtmlMessage (msg){

    const newHtml = `
    <a href="#" class="list-group-item list-group-item-action ">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${msg.username}</h5>
            <small>${msg.date}</small>
        </div>
        <p class="mb-1">${msg.msg}</p>
        <small>${msg.date}</small>
    </a>
    `
    return newHtml;
}