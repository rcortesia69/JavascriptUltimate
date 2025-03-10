let añoDeNacimiento = parseInt(prompt("Por favor, ingresa tu año de nacimiento:"));
let añoActual = new Date().getFullYear(); 


while (añoDeNacimiento > añoActual) {
    console.log("⚠️ El año ingresado no es válido.");
    return;
} 

if (isNaN(añoDeNacimiento)) {
    console.log("⚠️ Por favor, ingrese un número válido.");
    return; 
}

let edad = añoActual - añoDeNacimiento;

console.log(`Año de nacimiento: ${añoDeNacimiento}`);
console.log(`Tienes ${edad} años`);

if (edad < 18) {
    console.log("Eres menor de edad.");
} else {
    console.log("Eres mayor de edad.");
}

//**
// En este caso Chatgpt me comenta que debo arreglar varias cosas, dentro de esas cosas es que debo colocar todo de ser posible dentro del while 
// quedando de esta manera*/

let añoActual = new Date().getFullYear();
let añoDeNacimiento = parseInt(prompt("Por favor, ingresa tu año de nacimiento:"));

// Mientras el usuario ingrese un año no válido, seguimos pidiéndolo
while (isNaN(añoDeNacimiento) || añoDeNacimiento > añoActual || añoDeNacimiento < 1900) {
    console.log("⚠️ Error: Ingresa un año válido (entre 1900 y el actual).");
    añoDeNacimiento = parseInt(prompt("Por favor, ingresa un año de nacimiento válido:"));
}

// Ahora que tenemos un año válido, calculamos la edad
let edad = añoActual - añoDeNacimiento;

console.log(`Año de nacimiento: ${añoDeNacimiento}`);
console.log(`Tienes ${edad} años`);

if (edad < 18) {
    console.log("Eres menor de edad.");
} else {
    console.log("Eres mayor de edad.");
}