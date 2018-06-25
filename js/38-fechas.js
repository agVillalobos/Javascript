
var fecha = new Date();

var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDate();
var hour = fecha.getHours();

var textoHora = `
    El año es: ${year}
    El mes es: ${month}
    El dia es: ${day}
    La hora es: ${hour}
`;

console.log(fecha);
console.log(textoHora);

console.log(Math.ceil(Math.random()*10));