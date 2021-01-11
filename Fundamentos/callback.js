setTimeout(function() {
    console.log('Hola Mundo');
}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'carlos',
        id
    }
    if (id === 20) {
        callback(`el usuario con id ${ id } no existe en la db`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos:', usuario);
});