
// const socket = io(`http://localhost:3500`);
const socket = io.connect('http://localhost:3500', {reconnect: true});

let snSocket = '';

// socket.on('connect', function() {

//     console.log('Client connected.');

//     // Disconnect listener
//     socket.on('disconnect', function() {
//         console.log('Client disconnected.');
//     });
// });




socket.on('nsList', (nsList,count_all, chat_history) => {

    // Count all clients connected to server:
    $('#count_all').text(count_all);

    $('#namespaces').empty();
    nsList.forEach(d => {
        $('#namespaces').append(`<img ns="${d.endpoint}" src="${d.img}" class="endpoint">`);
    });
    // $('.endpoint').click(function(e){
    //     const endPointAttr = $(e.target).attr('ns');
    //     console.log(endPointAttr)
    // });


    
    chat_history.forEach(function(msgs){
        $('.box_message').append(newHtmlMessage(msgs));
        
        const box_msg = document.querySelector('.box_message');
        box_msg.scrollTo(0, $('.box_message').prop('scrollHeight'));

    });


    joinNs('/wiki');
    


});

