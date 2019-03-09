
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


}