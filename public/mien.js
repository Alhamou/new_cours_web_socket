const socket = io('http://localhost:3500');


const form = document.forms[0];
form.addEventListener('submit', function (e) {
    e.preventDefault();

    socket.emit('form', { mess: form.user_message.value });
});

socket.on('resend_msg', function (msg) {

    document.querySelector('#recived_message').innerHTML += `
        <li class="list-group-item">${msg.mess}</li>
    `;

});

