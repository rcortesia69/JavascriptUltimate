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
} else if (edad >= 18) {
    console.log(`Año de nacimiento: ${añoDeNacimiento}`);
    console.log(`Tienes ${edad} años`);
    console.log(`Eres Mayor de edad`)
}

//**
// En este caso el gpt me indica que esta casi perfecto pero me agrega una correccion de logica, agregando que solo se debe colocar
// else, ya que si no es menor de 18 automanticamente es mayor de 18, quedando el codigo asi */
let añoDeNacimiento = parseInt(prompt("Por favor, ingresa tu año de nacimiento:"));
let añoActual = new Date().getFullYear(); // Obtiene el año actual dinámicamente
let edad = añoActual - añoDeNacimiento;

if (edad < 18) {
    console.log(`Año de nacimiento: ${añoDeNacimiento}`);
    console.log(`Tienes ${edad} años`);
    console.log(`Eres menor de edad`);
} else { // No es necesario poner "else if (edad >= 18)", porque solo hay dos opciones
    console.log(`Año de nacimiento: ${añoDeNacimiento}`);
    console.log(`Tienes ${edad} años`);
    console.log(`Eres mayor de edad`);
}