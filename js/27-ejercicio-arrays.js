'use strict'

/*
pida 6 nums y los ponga en un array.
mostrar el array entero en el cuerpo de la pagina y en la consola
ordenarlo y mostrarlo
invertir su orden
mostrarr cuantos elems tiene el array
busquede de un valor introduciodo por el usuario que nos diga si lo encontro.
*/

function mostrarArray(elementos, text="")
{
    document.write("<h1> Contenido del array " + text + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index)=> {document.write("<li>" +elemento+"</li>");});
    document.write("</ul>");
}

// var numeros = new Array(6);
var numeros = [];

for(var i =0; i< 5; i++)
{
    // numeros[i] = parseInt(prompt("introduce un numero", 0));
    numeros.push(parseInt(prompt("introduce un numero", 0)));

}

mostrarArray(numeros);
console.log(numeros);

//Ordenar y mostrar

numeros.sort(function(a,b){return a-b});//Ordenar por asc
console.log("Ordenados:" + numeros);
mostrarArray(numeros, "ordenados");

//Invertir y mostrar

numeros.reverse();
console.log("reverse:" + numeros);
mostrarArray(numeros, "revertido");

document.write("El array tiene: "+numeros.length);

//BUSQUEDA
var busqueda = parseInt(prompt("Busca numero: ",0));
var pos = numeros.findIndex(numero => numero == busqueda);

if(pos && pos != -1)
{
    document.write("<h1>Encontrado</h1>");
    document.write("Posicion de la busqueda: " + pos);
}
else
{
    document.write("<h1>No encontrado</h1>");
}