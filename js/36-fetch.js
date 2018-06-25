'use strict'

//https://jsonplaceholder.typicode.com/

//Fetch(ajax) y peticiones a servicios /api rest
//https://jsonplaceholder.typicode.com/users

//fetch: peticiones asincronas()AJAX)
//promesas: usasdo para peticiones asincornes, representa un valor que puede estar disponible ahora o en el futuro.
//promesas: es un objeto que representa la terminacion o el fracaso de una operacion asincrona.

getUsuarios()
    .then(data => data.json())//son promesas
    .then(users => {
        listadoUsuarios(users.data);
        return getInfo();

    })
    .then(data => {
        console.log(data);
        var div_profesor = document.querySelector("#profesor");
        div_profesor.innerHTML = data;
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        console.log(user);
        mostrarJanet(user.data);
    })
    .catch(error => {
        alert("error en las peticiones");
        console.log(error + " some");
    });


function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {

    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'www.some.com'
    };

    return new Promise((resolve, reject) => {
        var profesor_string = "";

        setTimeout(() => {
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' || profesor_string == '')
             return reject('error');

            return resolve(profesor_string);
        }, 3000);
    });

}

function listadoUsuarios(usuarios) {
    var div_usuarios = document.querySelector("#usuarios");
    usuarios.map((user, i) => {
        let nombre = document.createElement("h2");
        nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
        div_usuarios.appendChild(nombre);
        document.querySelector(".loading").style.display = "None";
    });
}

function mostrarJanet(user) {
    var div_janet = document.querySelector("#janet");
    let nombre = document.createElement("h4");
    let avatar = document.createElement('img');
    div_janet.innerHTML = "";
    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;

    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);
    // document.querySelector(".loading").style.display = "None";
}

// console.log(usuarios);