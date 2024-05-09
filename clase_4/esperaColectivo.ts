import * as readlinesync from "readline-sync";

let llegadaColectivo: string='';
    
llegadaColectivo = readlinesync.question("Llego el colectivo? (S/N)");

while (llegadaColectivo == "N"); {
    console.log("Esperando el colectivo...");

    llegadaColectivo = readlinesync.question("Llego el colectivo? (S/N)");

}
if (llegadaColectivo == "S") {
    console.log("Lego el colectivo");

}
