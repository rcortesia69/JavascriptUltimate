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