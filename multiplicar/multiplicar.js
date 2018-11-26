const fs = require('fs'); // definicion de libreria de node
const colors = require('colors/safe');


module.exports.crearFile = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ingresada ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ingresado ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject('mennsaje error')
            else
                resolve(`tabla ${base}.txt`);

        });
    });
};

module.exports.listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ingresada ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ingresado ${limite} no es un número`);
            return;
        }


        // console.log(colors.blue('==============');
        // console.log(`TABLA ${base}`.red);
        // console.log('=============='.red);
        for (let i = 1; i <= limite; i++) {
            let data = '';
            data += ` ${base} * ${i} = ${base*i}`;
            console.log(colors.red(data));
        }

    });
};