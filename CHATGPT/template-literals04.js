let precio = parseFloat(prompt("Por favor ingrese el precio del producto"));
let descuento = parseFloat(prompt("Por favor ingrese el porcentaje de descuento"));
let valorDescuento = precio * (descuento/100)
let valorFinal = precio - valorDescuento

console.log(`El precio final del producto es de ${valorFinal.toFixed(2)}`)