/*Encontrar el elemento más grande del arreglo:
Dado el siguiente arreglo:[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar
*/
// inicio de la array
    const num: number[]=[4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16,];
    let mayor= 0;
        for (let i =0; i<num.length; i++){
            if (num[i] >mayor) {            
            mayor= num[i];
        }
    }
    console.log ("El numero Mayor del Arreglo es: " + mayor);
    
    let numGlobalMayor= mayor; //Asignacion variable Global

//Funcion para almacenar numero mas grande de la array en variable global y determinar Par o Impar    
    function numParImpar(numGlobalMayor):number{
           
        if (numGlobalMayor % 2 ===0){
            console.log("El numero " + numGlobalMayor + " es par");
        }else {
            console.log("El numero " + numGlobalMayor + " es Impar")
        }
        return numGlobalMayor;
        
        }
        numParImpar(numGlobalMayor); 
        



    




  







