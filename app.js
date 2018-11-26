const argv = require('./config/yargs').argv;

const { crearFile, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(argv.base + argv.limite);
switch (comando) {
    case 'listar':
        console.log(`base ${argv.base} limite ${argv.limite}`);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearFile(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('error');

}

// let argv2 = process.argv;

// console.log(argv);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);

// crearFile(base)
//     .then(archivo => console.log(`Archivo Creado ${archivo}`))
//     .catch(e => console.log(e));