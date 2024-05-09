"use strict";
//* Escribir unm algoritmo que nos pida una clave y verifique que sea la correcta.
//* Tenga en cuenta que la clave es la palabra "eureka".
//* Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrara
//  un mensaje indicandonos que hemos agotado todas las oportunidades.
//* Si acertamos la clave, saldremos directamente del programa.  
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var maxIntentos = 3;
var claveCorrecta = "eureka";
var intento = 0;
var clave = '';
while (intento <= maxIntentos && clave != claveCorrecta)
    ;
{
    clave = readlinesync.question("Ingrese su clave de Usuario: ");
    intento++;
}
if (clave != claveCorrecta) {
    console.log("Ha llegado al limite de intentos!.");
}
else {
    console.log("Acceso Correcto!");
}
