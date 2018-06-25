'use strict'

//programa que pida dos numeros y que nos digan cual es mayor
//plus: si los numeros no son un numero o son menores o
// igual a cero, nos lo vuelva a pedir
var numero1 = parseInt(prompt("Ingresa num1?"));
var numero2 = parseInt(prompt("Ingresa num2?"));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2))
{
    numero1 = parseInt(prompt("Ingresa num1?"));
    numero2 = parseInt(prompt("Ingresa num2?"));
}

if(numero1 > numero2)
{
    console.log("Numero1 es mayor");
}
else if(numero2 > numero1)
{
    console.log("Numero2 es mayor");
}
else if (numero2 == numero1)
{
    console.log("Son iguales");
}