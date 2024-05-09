"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlinesync = require("readline-sync");
var llegadaColectivo = '';
llegadaColectivo = readlinesync.question("Llego el colectivo? (S/N)");
while (llegadaColectivo == "N")
    ;
{
    console.log("Esperando el colectivo...");
    llegadaColectivo = readlinesync.question("Llego el colectivo? (S/N)");
}
if (llegadaColectivo == "S") {
    console.log("Lego el colectivo");
}
