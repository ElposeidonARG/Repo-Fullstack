    
//declaro las variables div y llamo a los elementos del html guardandolas dentro de cada variable
    let div1 = document.getElementById ("div1");
    let div2 = document.getElementById ("div2");
    let btn1 = document.getElementById ("btn1");
    let btn2 = document.getElementById ("btn2");

//asigno eventos de escucha para que al momento de hacer click, cambie la visibilidad de las cajas(divs) 
btn1.addEventListener('click', () => {
        div1.style.visibility='hidden'; //
        div2.style.visibility='visible';
    })
btn2.addEventListener('click', () => { 
        div2.style.visibility='hidden';
        div1.style.visibility='visible';
    })
