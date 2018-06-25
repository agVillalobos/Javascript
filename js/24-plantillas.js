'use strict'

var nombre = prompt("Nombre");
var apellidos = prompt("Apellidos");

var texto = "Mi nombre es " + nombre + " con apellidos " + apellidos;

var text = `
    <h1> hola </h1>
    <h3> Mi nombre : ${nombre} </h3>
    <h3> Apellidos : ${apellidos} </h3>
`;

document.write(texto);

