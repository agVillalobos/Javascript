'use strict'

//Funciones anonimas
//es una funcion que no tiene nombre
//callback es una funcion que recibe 
//como param otra funcion y que se ejecuta dentro de la primera

var pelicula = function(name)
{
    return "la pelicula es " + name;
};

function sumame(num1, num2, sumaYmuestra, sumaPorDos)
{
    var sumar = num1+num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5,7, function(dato)
    {
    console.log("la suma es ", dato);
    }
    ,function(dato)
    {
        console.log("la suma por dos es ", dato*2);
    });
    
//se puede substituir function por =>
sumame(5,7,dato =>
    {
    console.log("la suma es ", dato);
    }
    ,dato=>
    {
        console.log("la suma por dos es ", dato*2);
    });