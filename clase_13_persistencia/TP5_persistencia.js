"use strict";
/*Guarda la informacion de los arrays declarados en archivos "precios.txt" y
"productos.txt" respectivamente. Luego recupera la informacion en forma de array nuevamente y
mostrarla por consola.*/
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
var contenidoPrecios = " "; // ASIGNO VARIABLES PARA APLICAR ESPACIOS
var contenidoProductos = " ";
//RECORRO EL ARRAY Y ASIGNO VALORES DE VARIABLE A LOS ARREGLOS
// Y ESCRIBO LAS MODIFICACIONES A LOS ARCHIVOS .TXT
for (var i = 0; i < precios.length; i++) {
    contenidoPrecios += "".concat(precios[i], " ");
    fs.writeFileSync('./precios.txt', contenidoPrecios);
}
for (var i = 0; i < productos.length; i++) {
    contenidoProductos += "".concat(productos[i], " ");
    fs.writeFileSync('./productos.txt', contenidoProductos);
}
console.log(contenidoPrecios, contenidoProductos);
//LEO LOS ARCHIVOS CON READFILESYNC, Y CON "TRIM" Y "SPLIT" BORRO 
//ESPACIOS Y DIVIDO ARRAY DE TEXTO CON ESPACIOS.
var datosPrecios = fs.readFileSync('./precios.txt', "utf8");
var datosPrecios2 = datosPrecios.trim();
var nuevoArray = datosPrecios2.split(" ");
var datosProductos = fs.readFileSync('./productos.txt', "utf8");
var datosProductos2 = datosProductos.trim();
var nuevoArray2 = datosProductos2.split(" ");
var arrayPrecio = new Array(3);
for (var i = 0; i < nuevoArray.length; i++) {
    arrayPrecio[i] = parseInt(nuevoArray[i]);
}
// FINALMENTE MUESTRO LOS ARREGLOS
console.log(arrayPrecio);
console.log(nuevoArray2);
