'use strict'

//Eventos del raton.

//carga todos los elementos del dom y luego ejecuta el script.
window.addEventListener('load',()=>
{
        var boton = document.querySelector("#boton");
    console.log(boton);
    function cambiarColor()
    {
        console.log("has dado click");
        var bg = boton.style.background;
        if(bg =="green")
        {
            boton.style.background="red";
            
        }
        else
        {
            boton.style.background="green";
        }

        boton.style.padding ="10px";

        return true;
    }


    var boton = document.querySelector("#boton");

    //click
    boton.addEventListener('click', ()=>
    {
        cambiarColor();
        console.log(this);
        // this.style.border = "10px solid black";
    });

    //mouse over

    boton.addEventListener('mouseover',()=>
    {
        boton.style.background = "yellow";
    });

    //mouseout

    boton.addEventListener('mouseout',()=>
    {
        boton.style.background = "black";
    });

    //focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus',()=>
    {
        console.log("focus");
    });


    //blur
    input.addEventListener('blur',()=>
    {
        console.log("fuera del input");
    });


    //keydown
    input.addEventListener('keydown',(event)=>
    {
        console.log("[keydown]", String.fromCharCode(event.keyCode));
        // console.log("[keydown]", event.keyCode);
    });


    //keypress
    input.addEventListener('keypress',()=>
    {
        console.log("[keypress] tecla presionada ", String.fromCharCode(event.keyCode));
    });

    //keyup

    input.addEventListener('keyup',()=>
    {
        console.log("[keyup]tecla soltadoa ", String.fromCharCode(event.keyCode));
    });

});

// var boton = document.querySelector("#boton");
// console.log(boton);
// function cambiarColor()
// {
//     console.log("has dado click");
//     var bg = boton.style.background;
//     if(bg =="green")
//     {
//         boton.style.background="red";
        
//     }
//     else
//     {
//         boton.style.background="green";
//     }

//     boton.style.padding ="10px";

//     return true;
// }


// var boton = document.querySelector("#boton");

// //click
// boton.addEventListener('click', ()=>{cambiarColor();});

// //mouse over

// boton.addEventListener('mouseover',()=>
// {
//     boton.style.background = "yellow";
// });

// //mouseout

// boton.addEventListener('mouseout',()=>
// {
//     boton.style.background = "black";
// });

// //focus
// var input = document.querySelector("#campo_nombre");
// input.addEventListener('focus',()=>
// {
//     console.log("focus");
// });


// //blur
// input.addEventListener('blur',()=>
// {
//     console.log("fuera del input");
// });


// //keydown
// input.addEventListener('keydown',(event)=>
// {
//     console.log("[keydown]", String.fromCharCode(event.keyCode));
//     // console.log("[keydown]", event.keyCode);
// });


// //keypress
// input.addEventListener('keypress',()=>
// {
//     console.log("[keypress] tecla presionada ", String.fromCharCode(event.keyCode));
// });

// //keyup

// input.addEventListener('keyup',()=>
// {
//     console.log("[keyup]tecla soltadoa ", String.fromCharCode(event.keyCode));
// });
