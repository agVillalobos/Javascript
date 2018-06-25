'use strict'

/*
si un numero es par o impar
 */

var numero1 = parseInt(prompt("Ingresa num1?"));

while(numero1 <= 0 || isNaN(numero1))
{
    numero1 = parseInt(prompt("Ingresa num1?"));
}

if(numero1 % 2 == 0){
    console.log(numero1 + " es par. <br/>");
}
else
{
    console.log(numero1 + " es impar. <br/>");
}