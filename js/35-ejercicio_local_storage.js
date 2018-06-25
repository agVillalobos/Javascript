'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', () => {
    console.log("Entro");
    var titulo = document.querySelector("#addpelicula").value;
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#peliculasList");
for (var i in localStorage) {
    console.log(localStorage[i]);
    if (typeof localStorage[i] == "string") {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}


var formulario = document.querySelector("#formBorrapeliculas");

formulario.addEventListener('submit', () => {
    console.log("Entro");
    var titulo = document.querySelector("#borrapelicula").value;
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo, titulo);
    }
});