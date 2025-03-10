let nota1 = parseFloat(prompt("Ingrese su primera nota"));
let nota2  = parseFloat(prompt("Ingrese su segunda nota"));
let nota3 = parseFloat(prompt("Ingrese su tercera nota"));
let nota4 = parseFloat(prompt("Ingrese su cuarta nota"));
let nota5 = parseFloat(prompt("Ingrese su quinta nota"));

if (nota1 || nota2 || nota3 || nota4 || nota5 < 0 || nota1 || nota2 || nota3 || nota4 || nota5 > 100){
    console.log("Ingresa un numero valido entre 0 y 100");
}

let promedio = (nota1 + nota2 + nota3 +nota4 +nota5) / 5;

if (promedio >= 90 && <= 100) {
    console.log(`Aprobaste con Excelente con un promedio de $(promedio.tofixed(2))`);
}else if (promedio >= 80 && promedio <= 89){
    console.log(`Aprobaste con Notable con un promedio de $(promedio.tofixed(2))`);
}else if (promedio >= 70 && <= 79){
    console.log(`Aprobaste con Bueno con un promedio de $(promedio.tofixed(2))`);
}else if (promedio >= 60 && <= 69){
    console.log(`Aprobaste con Suficiente con un promedio de $(promedio.tofixed(2))`);
}else{
    console.log(`Reprobaste con un promedio de $(promedio.tofixed(2))`);
}

//**
// Las correcciones que me hace chatgpt son las siguientes, primero, cuando intento comparar en el primer if
// solo se esta comparando la nota 5 con el <= 0, la manera correcta es hacer comparaciones una a una 
// de la siguiente manera*/

if (nota1 < 0 || nota1 > 100 || 
    nota2 < 0 || nota2 > 100 || 
    nota3 < 0 || nota3 > 100 || 
    nota4 < 0 || nota4 > 100 || 
    nota5 < 0 || nota5 > 100) {
    console.log("⚠️ Ingresa un número válido entre 0 y 100.");
    return; // Detenemos la ejecución si hay un error
}

//**
// Por otro lado tuve otro error en la sintaxys, ya que coloque en la comparacion 
// promedio >= 90 && 100, y no esta comparando contra nada ya que tengo que declarar la variable siempre
// es decir promedio >= 90 && promedio <= 100 */


//**
//  Tuve un error tambien en template literals, 
// 1.- en la variable no se envuelve en parectesis si no en llaves, es decir debe quedar en vez de esta
// manera $(promedio.tofixed(2), de esta otra  ${promedio.toFixed(2)}
// 2.- ademas cuando coloco el toFixed la "F" va en mayuscula*/

// Pedimos las notas al usuario
let nota1 = parseFloat(prompt("Ingrese su primera nota"));
let nota2 = parseFloat(prompt("Ingrese su segunda nota"));
let nota3 = parseFloat(prompt("Ingrese su tercera nota"));
let nota4 = parseFloat(prompt("Ingrese su cuarta nota"));
let nota5 = parseFloat(prompt("Ingrese su quinta nota"));

// Validamos que todas las notas estén en el rango 0-100
if (nota1 < 0 || nota1 > 100 || 
    nota2 < 0 || nota2 > 100 || 
    nota3 < 0 || nota3 > 100 || 
    nota4 < 0 || nota4 > 100 || 
    nota5 < 0 || nota5 > 100) {
    console.log("⚠️ Ingresa un número válido entre 0 y 100.");
    return; // Detenemos la ejecución si hay un error
}

// Calculamos el promedio
let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

// Clasificación de la nota final
if (promedio >= 90 && promedio <= 100) {
    console.log(`Aprobaste con Excelente con un promedio de ${promedio.toFixed(2)}`);
} else if (promedio >= 80 && promedio <= 89) {
    console.log(`Aprobaste con Notable con un promedio de ${promedio.toFixed(2)}`);
} else if (promedio >= 70 && promedio <= 79) {
    console.log(`Aprobaste con Bueno con un promedio de ${promedio.toFixed(2)}`);
} else if (promedio >= 60 && promedio <= 69) {
    console.log(`Aprobaste con Suficiente con un promedio de ${promedio.toFixed(2)}`);
} else {
    console.log(`Reprobaste con un promedio de ${promedio.toFixed(2)}`);
}