'use sctrict' // «----nos ayuda para no cometer errores en el codigo, asi VCode nos avisa.

function cambiarTexto(){
    let titulo=document.querySelector("#inpText").Value;
    document.getElementById("titulo").innerText=titulo;

}

console.log (document.getElementById("titulo"));// se utiliza cuando es un Id

