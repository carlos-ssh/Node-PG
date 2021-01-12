const argv = require('yargs')
    .command('listar', 'Imprime en consola la table de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10,
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

let argv2 = process.argv;

console.log('Limite', argv.base);


// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo Creado: ${ archivo }`))
//     .catch(e => console.log(e));