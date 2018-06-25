'use strict'

//DOM - Document Object Model

function cambiaColor(color)
{
    caja.style.color = color;
}

//Conseguir elementos con id concreto.

// var caja = document.getElementById("micaja");
// var caja = document.getElementById("micaja").innerHTML;
// var caja = document.querySelector("#micaja");

// caja.innerHTML= "texto cambiado";
// caja.style.background = "red";
// caja.style.padding = "20px";
// caja.style.color = "white";
// caja.className = "miClass";

// console.log(caja);

//Conseguir elementos por su etiqueta.

// var todosLosDivs = document.getElementsByTagName('div');
// var seccion = document.querySelector("#miseccion");
// var hr = document.createElement("hr");
// var valor;
// for(valor in todosLosDivs)
// {
//     if(typeof todosLosDivs[valor].textContent == 'string')
//     {
//         var parrafo = document.createElement("p");
//         var texto = document.createTextNode(todosLosDivs[valor].textContent);
//         parrafo.append(texto);
//         seccion.append(parrafo);
//     }
// }
// seccion.append(hr);

//Conseguir elemntos por su clase css

var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
console.log(divsAmarillos);
divsAmarillos[0].style.background = "yellow";
var div;
for(div in divsRojos)
{
    if(divsRojos[div].className == "rojo")
    {
        divsRojos[div].style.background = "red";
    }
}

//Query selector

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var claseAmarillo = document.querySelector(".amarillo");
console.log(claseAmarillo);