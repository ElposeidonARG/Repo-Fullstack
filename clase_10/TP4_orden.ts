/* Implemente un algoritmo de ordenamiento con metodo Bubble Sort,
 para que ordene un arreglo de longitud N en orden descendente*/

let array: number[] = [2, 5, 8, 7, 6];

function ordenamiento(arr: number[]): number[] {
    
    for (let i = 0; i < array.length - 1; i++) { 
    for (let j = 0; j < array.length - 1; j++){
        if (arr[j] < arr[j + 1]){
            let aux= arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=aux;
        }
    }

}
return arr;

}

console.log("El resultado del orden descendente del array es: " + ordenamiento(array));

