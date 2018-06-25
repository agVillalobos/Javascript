'use strict'

/*
calculadora
-pida dos numeros
-si se mete un num mal que lo vuelva a pedir.
-todas las operaciones
 */

 
var numero1 = parseInt(prompt("Ingresa num1?"));
var numero2 = parseInt(prompt("Ingresa num1?"));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2))
{
    numero1 = parseInt(prompt("Ingresa num1?"));
    numero2 = parseInt(prompt("Ingresa num1?"));
}

var resultado = "";

console.log("La suma es = " + numero1 + numero2);
console.log("La resta es = " + numero1 - numero2);
console.log("La mult es = " + numero1 * numero2);
console.log("La div es = " + numero1 / numero2);
