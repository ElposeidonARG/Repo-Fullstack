
import * as readlinesync from 'readline-sync';

let suma: number, nota: number, promedio: number, contador: number;

contador= 1;
suma=0;

while(contador <= 10){
    nota= readlinesync.questionFloat("Ingrese su nota: ");
    suma= suma + nota;

    promedio = suma/10;
    console.log("El promedio del alumno es: " + promedio);
    
}



