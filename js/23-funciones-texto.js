'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso";
var texto2 = "texto 2";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

// console.log(dato);

//calcular longitud

var nombre = "asdf";
    nombre = ["asdf","",""];
// console.log(nombre.length);

//Concatenar texts

var textoTotal = texto1 + texto2;

var textoTotal1 = texto1.concat(texto2 + " ");

// console.log(textoTotal);
// console.log(textoTotal1);

//Busquedas
var busqueda = texto1.indexOf("curso");
var busqueda1 = texto1.match("curso");
var busqueda2 = texto1.substr(14,5);
var busqueda3 = texto1.charAt(44);
var busqueda4 = texto1.startsWith("Bi");
var busqueda5 = texto1.endsWith("Bi");
var busqueda6 = texto1.includes("curse");

// console.log(busqueda6);

var busqueda7 = texto1.replace("curso","que");
var busqueda8 = texto1.slice(14,22);
var busqueda9 = texto1.split(" ");
var busqueda10 = texto1.trim();

console.log(busqueda10);