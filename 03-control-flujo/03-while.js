let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}   

console.log('fin del loop');
/**
 * En este caso vamos a hacer un lo que se llama loop o bucle
 * el codigo se entiende que se ejecuta de arriba hacia abajo por lo tanto la primera condicion es
 * que i sea menor a 10, si esto se cumple se ejecuta el console.log(i) y luego se incrementa i en 1
 * esto se repite hasta que i sea igual a 10, en ese momento la condicion del while no se cumple y el
 * codigo termina. Hay que entender que solo se ejecuta el codigo del fin del loop cuando termina el loop.
 */

let i = 0;
while (i < 10) {
    if ( i % 2 == 0){
        console.log('numero par', i)
    }
    console.log(i);
    i++;
}   

console.log('fin del loop');

/**
 * En este caso se agrega una condicion al loop, se verifica si el numero es par, si es par se imprime
 * el mensaje 'numero par', si no es par se imprime el numero. 
 */