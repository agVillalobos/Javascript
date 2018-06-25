'use strict'

/*
mostrar todos los numeros impares entre dos numeros
 */

var numero1 = parseInt(prompt("Ingresa num1?"));
var numero2 = parseInt(prompt("Ingresa num2?"));

var lowestNum = numero1 > numero2 ? numero2 : numero1;
var greaterNume = numero1 > numero2 ? numero1 : numero2;

for(var i = lowestNum; i < greaterNume; i++)
{
    if(i % 2 != 0){
        document.write(i + "<br/>");
    }
}