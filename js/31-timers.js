'use strict'

window.addEventListener('load', () => {
    //Timers

    function intervalo() {
        var tiempo = setInterval(() => {
            console.log("set interval ejecutado");

            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px"
            }
        }, 300);
        
        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener('click', () => {
        clearInterval(tiempo);

    });

    var start = document.querySelector("#start");
    start.addEventListener('click', () => {
        intervalo();
    });

    //solo una vez
    // var tiempo = setTimeout(()=>
    // {
    //     console.log("set interval ejecutado");

    //     var encabezado = document.querySelector("h1");
    //     if(encabezado.style.fontSize == "50px")
    //     {
    //         encabezado.style.fontSize = "20px";
    //     }else
    //     {
    //         encabezado.style.fontSize = "50px"
    //     }
    // },300);

});