'use strict'//usado para aplicar las buenas practicas

//Prueba con var
var numero = 40;
console.log(numero);//valor 40
if(true)
{
    var numero = 50;
    console.log(numero);//valor 50
}
console.log(numero);//valor 50

//Prueba con let

var text = "Curso js";
console.log(text);

if(true)
{
    let text = "usando let";
    console.log(text);
}
console.log(text);