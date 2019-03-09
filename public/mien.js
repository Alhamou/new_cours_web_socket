
// const socket = io(`http://localhost:3500`);
const socket = io.connect('http://localhost:3500', {reconnect: true});

let snSocket = '';

socket.on('connect', function() {

    console.log('Client connected.');

    // Disconnect listener
    socket.on('disconnect', function() {
        console.log('Client disconnected.');
    });
});


const form = document.forms[0];
form.onsubmit = function (e) { 
    e.preventDefault();
    form.message.value = '';
};

socket.on('nsList', (nsList,count_all) => {

    // Count all clients connected to server:
    $('#count_all').text(count_all);

    $('#namespaces').empty();
    nsList.forEach(d => {
        $('#namespaces').append(`<img ns="${d.endpoint}" src="${d.img}" class="endpoint">`);
    });
    $('.endpoint').click(function(e){
        const endPointAttr = $(e.target).attr('ns');
        console.log(endPointAttr)
    });


    joinNs('/wiki');
    
});


