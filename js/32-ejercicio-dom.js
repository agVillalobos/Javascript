'use strict'

window.addEventListener('load', ()=>
{
    console.log("cargado");

    var formulario = document.querySelector("#formulario");
    var box_dased = document.querySelector(".dashed");
    box_dased.style.display = "none";

    formulario.addEventListener('submit', ()=>
    {
        console.log("submit enviado");
        
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        

        if(nombre.trim() == null || nombre.trim().length == 0)
        {
            alert("el nombre es invalido.");
            document.querySelector("#error_nombre").innerHTML = "El nombre es invalido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "None";
        }
        if(apellidos.trim() == null || apellidos.trim().length == 0)
        {
            alert("los apellidos son invalidos.");
            return false;
        }
        if(edad.trim() == null || edad.trim().length == 0 || isNaN(edad))
        {
            alert("la edad es invalido.");
            return false;
        }

        box_dased.style.display = "block";
        
        var datos_usuario = [nombre, apellidos, edad];

        for(var indice in datos_usuario)
        {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dased.append(parrafo);
        }
        
        console.log(nombre, apellidos, edad);
    });

});