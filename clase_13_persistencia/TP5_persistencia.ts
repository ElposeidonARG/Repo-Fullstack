/*Guarda la informacion de los arrays declarados en archivos "precios.txt" y
"productos.txt" respectivamente. Luego recupera la informacion en forma de array nuevamente y
mostrarla por consola.*/

import * as fs from 'node:fs';

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

let contenidoPrecios: string= " ";// ASIGNO VARIABLES PARA APLICAR ESPACIOS
let contenidoProductos: string=" "; 

//RECORRO EL ARRAY Y ASIGNO VALORES DE VARIABLE A LOS ARREGLOS
// Y ESCRIBO LAS MODIFICACIONES A LOS ARCHIVOS .TXT
for (let i=0; i<precios.length; i++){                   
        contenidoPrecios+= `${precios[i]} `
        fs.writeFileSync ('./precios.txt', contenidoPrecios);            
    }
for (let i=0; i<productos.length; i++){
    contenidoProductos+= `${productos[i]} `
    fs.writeFileSync ('./productos.txt', contenidoProductos);
    }
console.log(contenidoPrecios, contenidoProductos);
//LEO LOS ARCHIVOS CON READFILESYNC, Y CON "TRIM" Y "SPLIT" BORRO 
//ESPACIOS Y DIVIDO ARRAY DE TEXTO CON ESPACIOS.



let datosPrecios= fs.readFileSync ('./precios.txt', "utf8")
let datosPrecios2: string= datosPrecios.trim(); 
let nuevoArray: string[]=datosPrecios2.split(" ");


let datosProductos= fs.readFileSync ('./productos.txt', "utf8");
let datosProductos2: string= datosProductos.trim(); 
let nuevoArray2: string[]=datosProductos2.split(" ");

let arrayPrecio: number[]=new Array(3);
for (let i: number = 0; i<nuevoArray.length; i++){
    arrayPrecio[i]=parseInt(nuevoArray[i]);
}


// FINALMENTE MUESTRO LOS ARREGLOS
console.log(arrayPrecio);

console.log(nuevoArray2);


