"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var suma, nota, promedio, contador;
contador = 1;
suma = 0;
while (contador <= 10) {
    nota = readlinesync.questionFloat("Ingrese su nota: ");
    suma = suma + nota;
    promedio = suma / 10;
    console.log("El promedio del alumno es: " + promedio);
    break;
}
//SIMULAR LA ESPERA DE UN COLECTIVO//
var llegadaColectivo;
llegadaColectivo = readlinesync.question("");
