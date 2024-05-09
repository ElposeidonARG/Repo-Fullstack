import * as readlineSync from 'readline-sync';

let numero: number= readlineSync.questionInt("ingrese un numero: ");
    
    if (numero == 0) {
         console.log("El numero es: 0")
        
        }else if(numero % 2 == 0) {

            console.log("El numero: " + numero + " es Par");
        
        }else {
            console.log("El numero: " + numero +  "es Impar");

        }
        
        
    
    

    


   


