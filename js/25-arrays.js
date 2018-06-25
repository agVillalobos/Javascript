'use strict'

//Arrays, matrices

var nombre = "Alberto Garcia";
var nombres = ["n1","n2","n3","n4"];

var lenguajes = new Array("a1","a2","a3","a4");

// console.log(nombres[5]);

// var elemento = parseInt(prompt("Elemento?", 0));

// if(elemento >= nombres.length)
// {
//     alert("Introduce el numero correcto menor que " + nombres.length);
// }
// else
// {
//     alert("El usuario seleccionado es: " + nombres[elemento]);
// }

document.write("<h1> Lenguajes de programacion del 2018 </h1>");
// document.write(lenguajes[0]);
// document.write(lenguajes[1]);

// document.write("<ul>");

// for(var i = 0; i< lenguajes.length; i++)
// {
//     document.write("<li>"+lenguajes[i]+"</li>");
// }
// document.write("</ul>");

// document.write("<ul>");

// lenguajes.forEach((elemento, indice) => 
// {
//     document.write("<li>" + indice + " - "+elemento+"</li>");
// });

// for(let lenguaje in lenguajes)
// {
//     document.write("<li>" + lenguajes[lenguaje] +"</li>");
// }

// document.write("</ul>");

//BUSQUEDAS

// var busqueda = lenguajes.find(function(lenguaje)
// {
//     return lenguaje == "a2";
// });

var busqueda = lenguajes.find(lenguaje=> lenguaje =="a3");
var busquedaIndex = lenguajes.findIndex(lenguaje=> lenguaje =="a3");
console.log(busqueda);
console.log(busquedaIndex);

var precios = [10,20,50,80];
var busqueda1 = precios.some(precio => precio >= 20);

console.log(busqueda1);













