/* Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.*/

import * as rls from 'readline-sync';

let base: number= rls.questionInt("Ingrese numero base: ");
let exponente: number= rls.questionInt("Ingrese un exponente que sea mayor o igual a 0: ");
let resultadoFuncion: number= 0;

function calculoPotencia (base: number, exponente: number, ):number {
    let resultado: number= (base*exponente);

        if (exponente ==0){ 
        resultado= 1;
    }
        return resultado;
} 

resultadoFuncion=calculoPotencia(base, exponente);
        console.log ("La potencia elevada a la: " + exponente + " del numero: " + base +  " es= " + resultadoFuncion);
   
    