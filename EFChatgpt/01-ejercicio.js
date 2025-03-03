function getProducto(arr, indx){
  if (indx < 0 || indx >= arr.length){
    return 'Este elemento no existe'
  }
  return arr[indx]
}
let productos = ["Laptop", "Mouse","Teclado", "Monitor"]
console.log(getProducto(productos, 0))
