function calcularTotal(a, b){
    if(b < 0 || b > 100) {
        return 'Porcentaje Invalido'
    }
    return a + (a * b/100)
}

console.log(calcularTotal(31, 50))