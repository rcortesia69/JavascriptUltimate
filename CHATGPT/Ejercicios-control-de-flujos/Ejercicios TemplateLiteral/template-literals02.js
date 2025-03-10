//**
// En este segundo ejercicio se me pide crear lo siguiente
// Crea un programa que:
	// *1.	Pida al usuario el total de una cuenta en un restaurante.
	// *2.	Pida al usuario qué porcentaje de propina quiere dejar (ejemplo: 10%, 15%, 20%).
	// *3.	Calcule el monto de la propina y el total a pagar.
	// *4.	Muestre el resultado en consola usando Template Literals (${}).
    //  */

let totalCuenta = prompt("Por favor ingrese el total de la cuenta")
let porcentajePropina = prompt("Por favor ingrese el porcentaje de propina que desea dejar")
let propina = parseInt(totalCuenta) * parseInt(porcentajePropina / 100)

console.log(`El total de la cuenta es ${totalCuenta}`)
console.log(`Con una propina del ${porcentajePropina} debes dejar ${propina}`)
console.log(`El total a pagar es de ${totalCuenta + propina}`)

// totalCuenta + propina da un resultado incorrecto
// 	•	Como totalCuenta es un string, la suma lo concatenará en lugar de sumar los valores.
// 	•	Debemos asegurarnos de que totalCuenta sea un número con parseFloat().

//     Explicación de la corrección

//     ✔️ Usamos parseFloat() en lugar de parseInt() para aceptar valores con decimales.
//     ✔️ Convertimos porcentajePropina a número antes de dividirlo por 100.
//     ✔️ Evitamos la concatenación de strings convirtiendo totalCuenta en número antes de sumarlo con propina.
//     ✔️ Usamos .toFixed(2) para mostrar los valores con dos decimales.

// Pedir datos al usuario y convertirlos a números
let totalCuenta = parseFloat(prompt("Por favor ingrese el total de la cuenta"));
let porcentajePropina = parseFloat(prompt("Por favor ingrese el porcentaje de propina que desea dejar"));

// Calcular la propina y el total a pagar
let propina = totalCuenta * (porcentajePropina / 100);
let totalPagar = totalCuenta + propina;

// Mostrar los resultados con Template Literals
console.log(`El total de la cuenta es $${totalCuenta.toFixed(2)}`);
console.log(`Con una propina del ${porcentajePropina}%, debes dejar $${propina.toFixed(2)}`);
console.log(`El total a pagar es de $${totalPagar.toFixed(2)}`);