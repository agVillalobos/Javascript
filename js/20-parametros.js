'use strict'

//Params REST Y SPREAD

function listadoDeFrutas(fruta1,fruta2, ...resto_de_frutas)
{
    console.log("Fruta 1:", fruta1);
    console.log("Fruta 2:", fruta2);
    console.log(resto_de_frutas);
}

listadoDeFrutas("Naranja","Manzana","Sandia","Pera","Melon");

var frutas = ["Naranja","Manzana"];
listadoDeFrutas(...frutas,"Sandia","Pera","Melon");