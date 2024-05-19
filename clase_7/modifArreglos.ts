/*1-Creamos una variable “global” y mostramos su valor 
2- La modificamos dentro de una función y volvemos a 
mostrar su valor. 
3- Por último mostramos el valor de la misma luego la 
función.

let variableNumerica: number=0;
console.log("Valor de variableNumerica antes de la funcion: " + variableNumerica);
modificacionVariable(variableNumerica);

function modificacionVariable(variableNumerica: number){
    variableNumerica=1;
    console.log("Valor de variableNumerica dentro de la funcion: " + variableNumerica);
}
console.log("VariableNumerica despues de la funcion: " + variableNumerica);*/

let arregloGlobal:number[]= [0,1,2];
console.log("Valor del arreglo antes de la funcion: " + arregloGlobal);
    modificarVariable(arregloGlobal);

function modificarVariable(arregloParam: number[]){
    arregloParam=[9,9,9];
    console.log("Valor del arreglo dentro de la funcion: " + arregloGlobal);
    console.log("Valor del arregloParam: " + arregloParam);
}

console.log("Valor del arreglo despues de la funcion: " + arregloGlobal);
