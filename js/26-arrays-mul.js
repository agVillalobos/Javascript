'use strict'

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["pel1", "pel2", "pel3"];

peliculas.sort();
peliculas.reverse();

console.log(peliculas);

var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

// var elemento = "";

// do
// {
//     elemento = prompt("Introduce tu peli:");
//     peliculas.push(elemento);
// }while(elemento =! "acabar");

// peliculas.push("Batman");

var indice = peliculas.indexOf("pel1");

if(indice > -1)
{
    peliculas.splice(indice, 1);//elimina
}

var pelisStrign = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cad_arr = cadena.split(", ");

// console.log(cad_arr);
// console.log(peliculas);
// console.log(pelisStrign);