'use strict'

/*
mostrar todos los nums divisores de un numero
 */

var numero1 = parseInt(prompt("Ingresa num1?"));


for(var i = 1; i <= numero1; i++)
{
    if(i % 2 == 0){
        document.write(i + "<br/>");
    }
}