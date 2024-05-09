"use strict";
/*• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27 */
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var num1 = readlinesync.questionInt("Ingrese primer numero entero: ");
var num2 = readlinesync.questionInt("Ingrese segundo numero entero: ");
