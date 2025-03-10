let nota1 = parseInt(prompt("Por favor ingrese la primera nota"));
let nota2 = parseInt(prompt("Por favor ingrese la segunda nota"));
let nota3 = parseInt(prompt("Por favor ingrese la tercera nota"));
let suma = nota1 + nota2 + nota3;
let promedio = suma / 3;

if (promedio >= 7) {
  console.log(`Felicidades, has aprobado con un promedio de ${promedio}`);
} else {
  console.log(`Lo siento, has reprobado con un promedio de ${promedio}`);
} 
//Chatgpt me indica que se puede mejorar el codigo admitiendo los decimales yque se debe usar .tofixed(2) para que muestre 2 decimales 
//el odigo queda asi 

let nota1 = parseFloat(prompt("Por favor ingrese la primera nota"));
let nota2 = parseFloat(prompt("Por favor ingrese la segunda nota"));
let nota3 = parseFloat(prompt("Por favor ingrese la tercera nota"));
let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 7) {
  console.log(`¡Felicidades! Has aprobado con un promedio de ${promedio.toFixed(2)}`);
} else {
  console.log(`Lo siento, has reprobado con un promedio de ${promedio.toFixed(2)}`);
}