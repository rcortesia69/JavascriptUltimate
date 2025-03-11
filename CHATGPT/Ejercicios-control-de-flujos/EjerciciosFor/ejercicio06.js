let numerousuario = parseFloat(prompt("Introduzca un numero para multiplicar"));
let hastaEsteNumero = parseInt(prompt('Introduzca hasta que numero quiere multiplicar'));


for ( let i = 1; i <= hastaEsteNumero; i++){
    let resultado = i * numerousuario;
    console.log(` ${i} * ${numerousuario} = ${resultado}`)
}