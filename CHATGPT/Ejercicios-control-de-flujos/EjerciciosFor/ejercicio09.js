do {
    let numerousuario;
    // Validar que el número a multiplicar sea mayor que 0
    do {
        numerousuario = parseFloat(prompt("Introduzca un número para multiplicar:"));
        if (isNaN(numerousuario) || numerousuario <= 0) {
            console.log('⚠️ Error: El número a multiplicar debe ser mayor a 0.');
        }
    } while (isNaN(numerousuario) || numerousuario <= 0);

    let hastaEsteNumero;
    // Validar que el límite de la tabla sea mayor que 0
    do {
        hastaEsteNumero = parseInt(prompt("Introduzca hasta qué número quiere multiplicar:"));
        if (isNaN(hastaEsteNumero) || hastaEsteNumero <= 0) {
            console.log('⚠️ Error: El número debe ser mayor a 0.');
        }
    } while (isNaN(hastaEsteNumero) || hastaEsteNumero <= 0);

    // Generar la tabla de multiplicar
    for (let i = 1; i <= hastaEsteNumero; i++) {
        let resultado = i * numerousuario;
        console.log(`${i} * ${numerousuario} = ${resultado}`);
    }

    // Preguntar si quiere hacer otra operación
    do {
        let respuesta = prompt("¿Quiere hacer otra operación? (Sí/No)").toLowerCase();
    } while (respuesta !== "si" && respuesta !== "no");
      
} while (respuesta === "si"); // Repite mientras el usuario diga "si"

console.log("¡Gracias por usar la calculadora! 👋");