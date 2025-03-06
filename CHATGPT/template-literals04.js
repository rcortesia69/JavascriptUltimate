let precio = parseFloat(prompt("Por favor ingrese el precio del producto"));
let descuento = parseFloat(prompt("Por favor ingrese el porcentaje de descuento"));
let valorDescuento = precio * (descuento/100)
let valorFinal = precio - valorDescuento

console.log(`El precio final del producto es de ${valorFinal.toFixed(2)}`)

//el codigo en general esta bien, pero podemos haerlo mas profesional de la siguiente manera

let precio = parseFloat(prompt("Por favor ingrese el precio del producto"));
let descuento = parseFloat(prompt("Por favor ingrese el porcentaje de descuento"));

let valorDescuento = precio * (descuento / 100);
let valorFinal = precio - valorDescuento;

console.log(`Precio original: $${precio.toFixed(2)}`);
console.log(`Descuento aplicado: ${descuento}% ($${valorDescuento.toFixed(2)})`);
console.log(`Precio final con descuento: $${valorFinal.toFixed(2)}`);

//en este caso simplemente agregamos mas console.log para mostrar mas informacion al usuario.