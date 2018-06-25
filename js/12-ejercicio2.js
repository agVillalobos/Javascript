'use strict'

//programa que muestre los numeros entre dos numeros.

var numero1 = parseInt(prompt("Ingresa num1?"));
var numero2 = parseInt(prompt("Ingresa num2?"));

var lowestNum = numero1 > numero2 ? numero2 : numero1;
var greaterNume = numero1 > numero2 ? numero1 : numero2;

for(var i = lowestNum; i < greaterNume; i++)
{
    document.write(i + "<br/>");
}