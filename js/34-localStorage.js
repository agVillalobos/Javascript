'use strict'

//localstorage

//comprobar disponibilidad de local storage.
if(typeof(Storage) != undefined){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible");
}

//guardar datos

localStorage.setItem("titulo","curso");

//recuperar elemento

console.log(localStorage.getItem("titulo"));

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//guardar objetos

var usuario = {
    nombre:"Nombre",
    email:"email",
    web:"web"
};


localStorage.setItem("usuario", JSON.stringify(usuario));

//recuperar objeto

console.log(JSON.parse(localStorage.getItem("usuario")));

localStorage.removeItem("usuario");

localStorage.clear();