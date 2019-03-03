const socket = io('http://localhost:3500');


const form = document.forms[0];
form.onsubmit = function(e){
    e.preventDefault()
    console.log('submited!');
}



socket.on('data', (data)=>{ 
    const d = data.map(d => {
        return d;
    });
    const ns = document.querySelector('#namespaces');
    const rm = document.querySelector('#rooms');
    ns.innerHTML = '';
    rm.innerHTML = '';
    d.forEach(d => {
        ns.innerHTML += `<img src="${d.img}">`;
        
    });
    
    d[0].rooms.forEach(room => {
        rm.innerHTML += `<li><span>${room.roomTitle}<span class="icon_room badge badge-secondary">New</span></span></li>`
    });

    
});

