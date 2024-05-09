"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var no1 = rls.questionInt("Ingrese el primer numero: ");
var no2 = rls.questionInt("Ingrese el segundo numero: ");
var no3 = rls.questionInt("Ingrese el tercer numero: ");
var result = 0;
if (no1 < 0) {
    result = no1 * no2 * no3;
}
else {
    result = no1 + no2 + no3;
}
console.log(result);
