// Cargo el paquete FileSystem

const argv = require('./config/yargs').argv;
var colors = require('colors');
const fs = require('fs');


let datos = '';

//console.log(process);
//let argv2 = process.argv;

//console.log('Base', argv.base);
//console.log(argv);

let comando = argv._[0];

//Se generan los datos
for (let i = 1; i <= argv.limite; i++) {
    datos += `${argv.base} * ${i} = ${argv.base*i}\n`;
}

switch (comando) {
    case 'listar':
        console.log(`El comando es ${comando}`);
        break;
    case 'crear':
        fs.writeFile(`tablas/tabla${argv.base}.txt`, datos, (err) => {
            if (err) throw err;
            console.log('El archivo ha sido salvado!'.green);
        });
        break;
    default:
        console.log('Comando no reconocido');
}


/* console.log(argv2); */
//let parametro = argv[2];


// Se obtiene la base de la línea de comandos pasada como parámetro
/* let base = parametro.split('=')[1];

if (!Number(base)) {
    console.log('EL parámetro no es un número');
    return;
} */



//Se escribren los datos al archivo con el nombre del archivo asociado a la base o parámetro


// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]