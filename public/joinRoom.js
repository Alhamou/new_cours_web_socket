function joinRoom(endPoint){

 


    nsSocket.emit('joinRoom', endPoint,function (callback) {
        document.querySelector('#online_room').textContent = callback;
      });

    // console.log(data); // data will be 'woot'
    // opj[0].rooms.forEach(room => {
    //     let p = room.private ? 'true' : 'false';
    //     rm.innerHTML += `<li><span>${room.roomTitle}<span class="icon_room badge badge-secondary">${p}</span></span></li>`
    // });

    
    
}