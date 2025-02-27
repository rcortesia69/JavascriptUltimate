let animales = ['gato', 'perro', 'loro', 'pez', 'serpiente'];

for (let animal of animales) {
    console.log(animal);
}

//El operador For Of nos permite recorrer un array de una manera mas sencilla y legible
//En este caso se recorre el array de animales y se imprime cada uno de ellos
//primero se declara como queremos llamar a lo que esta dentro del array, que en este caso es animal
//luego se declara el array que queremos recorrer, en este caso animales.

/**
 * Hay una manera de hacer lo mismo con un while, pero es mas complicado y menos legible
 */

let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}

/**
 * Para explicar esto tenemos que entender que el array tiene una propiedad llamada length que nos dice
 * cuantos elementos tiene el array, en este caso 5. y cuando definimos la varialble i en 0, estamos
 * diciendo que queremos imprimir el primer elemento del array, que es 0, porque las arrays empiezan en 0
 * luego se incrementa i en 1 y se imprime el siguiente elemento, y asi sucesivamente hasta que i sea igual
 * a 5, en ese momento el loop termina
 */