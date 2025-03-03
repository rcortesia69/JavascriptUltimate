function calcularTotalCompra(productos, descuento) {
    // 1️⃣ Verificamos si el array está vacío
    if (productos.length === 0) {
        return "No hay productos en el carrito";
    }

    // 2️⃣ Sumamos los precios de todos los productos
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio; // Accedemos al precio de cada producto
    }

    // 3️⃣ Aplicamos el descuento si es válido
    if (descuento > 0 && descuento <= 100) {
        total -= total * (descuento / 100);
    }

    // 4️⃣ Retornamos el total final con 2 decimales
    return `Total a pagar: $${total.toFixed(2)}`;
}

// 🔥 Probamos la función con un carrito de compras
const carrito = [
    { nombre: "Leche", precio: 2.50 },
    { nombre: "Pan", precio: 1.20 },
    { nombre: "Cereal", precio: 3.80 }
];

console.log(calcularTotalCompra(carrito, 10)); // 🛒 Con 10% de descuento
console.log(calcularTotalCompra(carrito, 0));  // 🛒 Sin descuento
console.log(calcularTotalCompra([], 10));      // 🛒 Carrito vacío