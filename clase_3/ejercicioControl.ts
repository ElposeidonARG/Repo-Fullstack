import * as rls from 'readline-sync';

let no1: number= rls.questionInt("Ingrese el primer numero: ");
let no2: number= rls.questionInt("Ingrese el segundo numero: ");
let no3: number= rls.questionInt("Ingrese el tercer numero: ");
let result: number= 0;

if (no1 <0) {
    result=no1*no2*no3;

}else{
    result= no1+no2+no3;

}

console.log(result);

 