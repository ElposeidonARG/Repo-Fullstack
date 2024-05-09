//* Escribir unm algoritmo que nos pida una clave y verifique que sea la correcta.
//* Tenga en cuenta que la clave es la palabra "eureka".
//* Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrara
//  un mensaje indicandonos que hemos agotado todas las oportunidades.
//* Si acertamos la clave, saldremos directamente del programa.  

import * as readlinesync from 'readline-sync';

const maxIntentos: number= 3;
const claveCorrecta= "eureka";

let intento: number= 0;
let clave: string= '';

while (intento <= maxIntentos && clave != claveCorrecta);{
       clave = readlinesync.question ("Ingrese su clave de Usuario: ");
       intento++;
}

if (clave !=claveCorrecta){
     console.log("Ha llegado al limite de intentos!.");

} else { 
    console.log("Acceso Correcto!");
}



       









