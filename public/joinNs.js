
function joinNs (endPoint){

    if(nsSocket){
        nsSocket.close();
    }
    nsSocket = io(`http://localhost:3600${endPoint}`);


    nsSocket.on('nsRoomsLoad', function(rooms,rooms_users_online){

        // update the count users of rooms 
        $('#rooms_users_onlin').text(rooms_users_online);

        $('#rooms').empty();
        rooms.forEach(room => {
            let p = room.private ? 'true' : 'false';
            $('#rooms').append(`<li class="room"><span class="title_room">${room.roomTitle}</span><span class="icon_room badge badge-secondary">${p}</span></li>`);
        });

        // set default name space 
        $('.name_nameSpace').text($('.room:first-child .title_room').text());

        joinRoom($('.room:first-child .title_room').text());
        
    });

    
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

