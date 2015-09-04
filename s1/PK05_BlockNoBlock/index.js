//programa que lee un archivo de forma bloqueante
// cargar un modulo nativo de node que me permite trabajar con archivos

var fs = require('fs'); //file stream/flujo de archivos
//leyendo el archivo
var contenido = 
		fs.readFileSync('\documento.txt','utf-8');
console.log(contenido);

//haciendo otra operacion
console.log('\nEl programa termino');