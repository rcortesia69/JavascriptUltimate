// Crea un programa que:
// 	1.	Pida al usuario el nombre de un producto, su precio y la cantidad en stock.
// 	2.	Guarde esta información en un objeto con las propiedades:
// 	•	nombre
// 	•	precio
// 	•	stock
// 	3.	Simule una compra, pidiendo al usuario cuántas unidades quiere comprar.
// 	4.	Verifique si hay suficiente stock:
// 	•	✅ Si hay suficiente, actualiza el stock y muestra el total a pagar.
// 	•	❌ Si no hay suficiente stock, muestra un mensaje de error.

let producto = prompt("Por favor ingrese el nombre del producto");
let precio = parseFloat(prompt("Por favor ingrese el precio del producto"));
let stock = parseInt(prompt("Por favor ingrese la cantidad en stock"));