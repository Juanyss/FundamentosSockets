const { io } = require('../server')

io.on('connection', (client) => {
    console.log(`Client ${client.id} connect`);
    console.log(`------------------------`);

    //Enviar informacion
    io.emit('enviarMensaje', {
        usuario: 'Administrador',
        msj: 'Bienvenido a esta app'
    })

    //Estar atento a recibir la informacion
    client.on('disconnect', () => {
        console.log(`Client ${client.id} disconnect`);
    });


    //Recibir parametro desde el lado del cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log('Cliente envio:', data);

        client.broadcast.emit('enviarMensaje', data);

        // client.emit('responderSaludo', {
        //     msg: `Hola ${data.usuario}, bienvenido al servidor`
        // })

        // if (data.usuario) {
        //     callback({
        //         resp: `Hola ${data.usuario}, bienvenido al servidor`
        //     })
        // } else {
        //     callback({
        //         resp: `Nose quien sos gato ... Atte: el servidor`
        //     })
        // }



    });

})