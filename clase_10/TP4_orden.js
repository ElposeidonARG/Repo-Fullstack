/* Implemente un algoritmo de ordenamiento con metodo Bubble Sort,
 para que ordene un arreglo de longitud N en orden descendente*/
var array = [2, 5, 8, 7, 6];
function ordenamiento(arr) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                var aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr;
}
console.log("El resultado del orden descendente del array es: " + ordenamiento(array));
