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