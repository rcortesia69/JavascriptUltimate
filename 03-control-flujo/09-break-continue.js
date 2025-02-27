let i = 0;
while (i < 6) {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
}
/**
 * while (i < 6): Se ejecuta mientras i sea menor que 6.
i++: Se incrementa i antes de evaluar la condición.
if (i === 3) { continue; }: Si i es 3, se salta la impresión y pasa a la siguiente iteración.
console.log(i);: Imprime i en todas las iteraciones excepto cuando i === 3
continue se usa para saltar una iteración en un bucle, pero no termina el bucle. En este caso, si i es 3, no se imprime y se pasa a la siguiente iteración.
 */

let i = 0;
while (i < 6) {
    i++;
    if (i === 3) {
        continue;
    }
    if (i === 5) {
        break;
    }
    console.log(i);
}

/**
 * En el caso de break, se termina el bucle. En este caso, si i es 5, se termina el bucle y no se imprime nada más.
 */