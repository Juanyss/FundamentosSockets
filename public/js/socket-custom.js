var socket = io();
// On para escuchar
socket.on('connect', function() {
    console.log('Connect to the server');
});
// On para escuchar
socket.on('disconnect', function() {
    console.log('Lost conection with server');
}, function() {
    console.log('Se disparo el callback');
})


//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Juany',
    email: 'nacho_cunha@hotmail.com'
}, function(resp) {
    console.log(resp);
})

//Estar atento a recibir la informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor envio:', mensaje);
})

// socket.on('responderSaludo', function(respuesta) {
//     console.log(respuesta);
// })