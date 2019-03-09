
const socket = io(`http://localhost:3500`);

let snSocket = '';

const form = document.forms[0];
form.onsubmit = function (e) { 
    e.preventDefault();
    form.message.value = '';
};

window.onload = function (){
    // document.onclick = function(e){
    //     if(e.target.getAttribute('ns')){
    //         const nsAttr = e.target.getAttribute('ns');
    //         // console.log(nsAttr);
    //         addNameSpace(nsAttr);
    //     }
    // }
}

socket.on('nsList', (nsList,count_all) => {

    
    const ns = document.querySelector('#namespaces');
    document.querySelector('#count_all').textContent = count_all;


    ns.innerHTML = '';

    nsList.forEach(d => {
        ns.innerHTML += `<img ns="${d.endpoint}" src="${d.img}" class="endpoint">`;
    });


    Array.from(document.getElementsByClassName('endpoint')).forEach(function(roomNumber){
        roomNumber.addEventListener('click', function (){
            const endPointAttr = roomNumber.getAttribute('ns');
            // console.log(endPointAttr)
            // socket.emit('joinToRoom', endPointAttr);
            //const getEndPoint = nsOpject.filter(d => {return d.endpoint === endPointAttr});
            //addRoom(getEndPoint);
        });
    });


    joinNs('/wiki')

    // const setEndPoint = nsList.filter(d => {return d.endpoint === '/wiki'});
    // addRoom(nsList);

    // addNameSpace('/wiki');

});


