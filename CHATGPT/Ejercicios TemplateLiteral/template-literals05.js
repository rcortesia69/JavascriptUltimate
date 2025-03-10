let añoDeNacimiento = parseInt(prompt("Por favor, ingresa tu año de nacimiento:"));
let añoActual = 2025;
let edad = añoActual - añoDeNacimiento;

console.log(`Año de nacimiento: ${añoDeNacimiento}`);
console.log(`Tienes ${edad} años`)

//En este caso gpt me indica que puedo mejorar el codigo usando new.date().getFullYear() para obtener el año actual siempre
//por lo tanto el codigo quedaria asi

let añoDeNacimiento = parseInt(prompt("Por favor, ingresa tu año de nacimiento:"));
let añoActual = new Date().getFullYear(); // Obtiene el año actual dinámicamente
let edad = añoActual - añoDeNacimiento;

console.log(`Año de nacimiento: ${añoDeNacimiento}`);
console.log(`Tienes ${edad} años`);