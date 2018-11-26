const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'genera archivo de listarTabla', opciones)
    .help()
    .argv;

module.exports = {
    argv
}