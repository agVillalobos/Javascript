'use strict'

//FUNCIONES
// es reutilizable

function byConsole(num1, num2)
{
    console.log("La suma es = " + num1 + num2);
    console.log("La resta es = " + num1 - num2);
    console.log("La mult es = " + num1 * num2);
    console.log("La div es = " + num1 / num2);
    
}

function byScreen(num1, num2)
{
    document.write("La suma es = " + num1 + num2);
    document.write("La resta es = " + num1 - num2);
    document.write("La mult es = " + num1 * num2);
    document.write("La div es = " + num1 / num2);
    
}

function calculadora(num1, num2, mostrar = false)
{
    console.log("calculadora");
    if(mostrar)
    {
        byConsole(num1,num2);
    }
    else
    {
        byScreen(num1, num2);
    }
}

calculadora(3,4);
