const socket = io('http://localhost:3500');


const form = document.forms[0];
form.onsubmit = function (e) { e.preventDefault() };


document.onclick = function(e){
    if (e.target.getAttribute('ns')){
        socket.emit('room', e.target.getAttribute('ns'));
    }
}


socket.on('data', (nsOpject) => {

    
    const d = nsOpject.nsOpject.map(d => {
        return d;
    });
    const ns = document.querySelector('#namespaces');
    const rm = document.querySelector('#rooms');

    ns.innerHTML = '';
    rm.innerHTML = '';

    d.forEach(d => {
        ns.innerHTML += `<img ns="${d.id}" src="${d.img}" class="ns_imgs">`;
    });

    d[nsOpject.room].rooms.forEach(room => {
        rm.innerHTML += `<li><span>${room.roomTitle}<span class="icon_room badge badge-secondary">New</span></span></li>`
    });

});

