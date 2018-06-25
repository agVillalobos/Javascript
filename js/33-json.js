'use strict'

//JSON - Javascript Object Notation

var pelicula = {
    titulo:'Batman',
    pais: 'Estados Unidos',
    year: 2017
};

var peliculas = [{titulo:"titulo1", year:2016, pais:'France'}, pelicula];

// console.log(peliculas);

for(var index in peliculas)
{
    console.log(peliculas[index]);
}