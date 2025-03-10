//**
// En este caso vamos a hacer practicamente el mismo ejercicio pero vamos a usar for y un array para pedir las notas
// de manera mas eficiente
// el codigo queda de la siguiente manera */

let notas = []; // Creamos un array vacío para almacenar las notas
let cantidadNotas = 5; // Número de notas a pedir

// Pedimos las notas usando un bucle for
for (let i = 0; i < cantidadNotas; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));

    // Validamos que la nota esté entre 0 y 100
    while (isNaN(nota) || nota < 0 || nota > 100) {
        console.log("⚠️ Ingresa un número válido entre 0 y 100.");
        nota = parseFloat(prompt(`Ingrese la nota ${i + 1} nuevamente:`));
    }

    notas.push(nota); // Agregamos la nota al array
}

// Calculamos el promedio sumando todas las notas y dividiendo entre la cantidad
let suma = 0;
for (let nota of notas) {
    suma += nota;
}
let promedio = suma / cantidadNotas;

// Clasificación según el promedio
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

// 1️⃣ Creamos un array vacío notas = [] para almacenar las notas.
// 2️⃣ Usamos un for para pedir las notas (i < cantidadNotas).
// 	•	Mostramos prompt() con "Ingrese la nota X:".
// 	•	Si la nota es inválida (NaN, menor a 0 o mayor a 100), volvemos a pedirla con while.
// 	•	Guardamos cada nota en el array con notas.push(nota).

// 3️⃣ Calculamos el promedio con otro for
// 	•	Recorremos el array con for (let nota of notas) y sumamos los valores.
// 	•	Dividimos la suma entre la cantidad de notas.

// 4️⃣ Usamos if - else if para clasificar el promedio
// 	•	promedio.toFixed(2) muestra dos decimales en la consola.
