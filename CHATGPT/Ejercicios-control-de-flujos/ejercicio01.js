let nota = parseFloat(prompt("Por favor ingrese la nota"));

if (nota >= 90 || nota <= 100) {
  console.log("Aprobado con Excelente");
}else ( nota >= 80 || nota <= 89) {
  console.log("Aprobado con Notable");
}else (nota >= 70 || nota <= 79) {
    console.log("Aprobadp con Bueno");
}else ( nota >=60 || nota <= 69) {
    console.log("Aprobado con Suficiente");
}else (nota >= 60){
    console.log("Reprobado");
}else (nota < 0 || > 100){
    console.log("Ingresa un numero valido entre 0 y 100")
}

//**
// Vale aqui hay varias correcciones, dentro de esas correcciones estan que
// no debo usar || ya que cuando digo la nota es mayor o igual "o" menor o igual a 100, en este aso la segunda condicion siempre
// se va a cumplir ya que el numero siempre va a ser menor a 100, por lo tanto debe usarse && */

//**
// Por otro lado no use correctamente la condicion else, ya que en este caso debio usarse else if y no else, ya que else no lleva condicion
//por lo tanto el codigo corregido quedaria de esta manera
//   */

let nota = parseFloat(prompt("Por favor ingrese la nota"));

// Primero verificamos si el número está en el rango válido
if (nota < 0 || nota > 100) {
    console.log("⚠️ Error: Ingresa un número válido entre 0 y 100.");
} else if (nota >= 90 && nota <= 100) {
    console.log("Aprobado con Excelente");
} else if (nota >= 80 && nota <= 89) {
    console.log("Aprobado con Notable");
} else if (nota >= 70 && nota <= 79) {
    console.log("Aprobado con Bueno");
} else if (nota >= 60 && nota <= 69) {
    console.log("Aprobado con Suficiente");
} else {
    console.log("Reprobado");
}