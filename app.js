// Cargo el paquete FileSystem
const argv = require('yargs').argv;

const fs = require('fs');


let datos = '';

//console.log(process);
let argv = process.argv;
let parametro = argv[2];
// Se obtiene la base de la línea de comandos pasada como parámetro
let base = parametro.split('=')[1];

if (!Number(base)) {
    console.log('EL parámetro no es un número');
    return;
}


//Se generan los datos
for (let i = 1; i <= 10; i++) {
    datos += `${base} * ${i} = ${base*i}\n`;
}
//Se escribren los datos al archivo con el nombre del archivo asociado a la base o parámetro
fs.writeFile(`tablas/tabla${base}.txt`, datos, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido salvado!');
});

// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]