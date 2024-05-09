import * as  readlinesync from 'readline-sync';

let posicionLlegada= readlinesync.question ("ingrese Posicion de Llegada: ");

switch (posicionLlegada) {
case "1":
    console.log("Medalla de Oro");
    break;

case "2":
    console.log("Medalla de Plata");
    break;

case "3":
    console.log("Medalla de Bronce");
    break;

default:
    console.log("Certificado de Perticipacion");
    break;

}
