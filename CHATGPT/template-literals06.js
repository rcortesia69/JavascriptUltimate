//**
// En este siguiente ejercicio continuaremos el ejercicio anterior pero vamos a agregar algo al codigo
// vamos a agregar un codigo que nos diga si es menor o mayor de edad */

let añoDeNacimiento = parseInt(prompt("Por favor, ingresa tu año de nacimiento:"));
let añoActual = new Date().getFullYear(); // Obtiene el año actual dinámicamente
let edad = añoActual - añoDeNacimiento;

if (edad < 18) {
    console.log(`Año de nacimiento: ${añoDeNacimiento}`);
    console.log(`Tienes ${edad} años`);
    console.log(`Eres Menor de edad`)
} else (edad >= 18) {
    console.log(`Año de nacimiento: ${añoDeNacimiento}`);
    console.log(`Tienes ${edad} años`);
    console.log(`Eres Mayor de edad`)
}
