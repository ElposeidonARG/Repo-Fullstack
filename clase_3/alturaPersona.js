"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var alturaPersona = readlineSync.question("Ingrese la altura:");
console.log("La persona mide:" + alturaPersona);
