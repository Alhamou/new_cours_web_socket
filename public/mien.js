

const socket = io('http://localhost:3600');

let nsSocket = '';

socket.on('nsList', (nsList) => {


    $('#namespaces').empty();
    nsList.forEach(d => {
        $('#namespaces').append(`<img ns="${d.endpoint}" src="${d.img}" class="endpoint">`);
    });


    $('.endpoint').on('click',function(e){
        
        joinNs($(e.target).attr('ns'));

        $(e.target).addClass('ns_avtive').siblings().removeClass('ns_avtive');

    });

    joinNs('/wiki');


    $('#form_msg').submit(function(e){

        e.preventDefault();
        
        // send the message to the Server.
        nsSocket.emit('msg_chat', {text: $('#chat_msg').val()});

    });

    // Search a word of Messages in all chat on Keyup.
    $('#search_input').on('keyup', function (e){

        $('.box_msg').hide();
        $('.box_msg').children().each(function (i, v){
            if(($(v).find('.text_msg_publich').text()).indexOf(e.target.value) >= 0){
                $(this).closest('.box_msg').show()
            }
        });
        
    });

});

 

