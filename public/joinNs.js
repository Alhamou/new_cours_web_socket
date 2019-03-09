
function joinNs (endPoint){

    nsSocket = io(`http://localhost:3500${endPoint}`);

    nsSocket.on('nsRoomsLoad', function(rooms,rooms_users_onlin){

        
        document.querySelector('#rooms_users_onlin').textContent = rooms_users_onlin;
        const rm = document.querySelector('#rooms');
        
        rm.innerHTML = '';
        rooms.forEach(room => {
            let p = room.private ? 'true' : 'false';
            rm.innerHTML += `<li class="room"><span>${room.roomTitle}<span class="icon_room badge badge-secondary">${p}</span></span></li>`
        });

        const roomElement = document.getElementsByClassName('room');
        Array.from(roomElement).forEach(room=>{
            room.addEventListener('click', function(){
                // nsSocket.emit();
                // console.log(room)
            });
        });

        const topRoomName = document.querySelector('.room').textContent;
        console.log(topRoomName);
        joinRoom(topRoomName);
        
        
    });


}