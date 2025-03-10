//**
// aqui vamos a seguir intensificando el codigo, va a ser el mismo que el anterior pero esta vez vamos a agregarle que si el usuario no ingresa un valor correcto de año, mostrar, el año ingresado no es valido
// y si coloca un valor vacio o no numerico, colocar por favor ingrese un numero valido */

let añoDeNacimiento = parseInt(prompt("Por favor, ingresa tu año de nacimiento:"));
let añoActual = new Date().getFullYear(); // Obtiene el año actual dinámicamente
let edad = añoActual - añoDeNacimiento;

if (añoDeNacimiento > añoActual) {
    console.log("El año ingresado no es válido");
    break
} else if inNaN(añoDeNacimiento) {
    console.log("Por favor, ingrese un número válido");
    break
} else (edad < 18) {
    console.log(`Año de nacimiento: ${añoDeNacimiento}`);
    console.log(`Tienes ${edad} años`);
    console.log(`Eres menor de edad`);
} else { // No es necesario poner "else if (edad >= 18)", porque solo hay dos opciones
    console.log(`Año de nacimiento: ${añoDeNacimiento}`);
    console.log(`Tienes ${edad} años`);
    console.log(`Eres mayor de edad`);
}