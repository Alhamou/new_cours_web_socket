function joinRoom(endPoint){

    nsSocket.emit('joinRoom', endPoint,function (callback) {

        // update the count users of online one room 
        document.querySelector('#online_room').textContent = callback;

      });

}