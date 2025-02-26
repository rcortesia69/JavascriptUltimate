//short-circuit

/**
 * Aqui hay que entender que cuando usamos el operador logico or (||)  nos va
 * a devolver el primer valor verdadero que encuentre
 * En cambio cuando usamos el operador logico and (&&) nos va a devolver el primer valor falso que encuentre
 * De esta manera hay un listado de valores que nos retornaran siempre falso y son los siguientes
 */

//Falso
//false
//0
//null
//undefined
//NaN
//''

/**
 * Estos valores al colocarlos en una condicion siempre nos van a retornar falso y se les conocen como valores falsy.
 */

let nombre = '';
let username = nombre || 'anonimo';
console.log(username); //anonimo

/**
 * mira como en este caso la variable nombre es un string vacio, y al colocarla en una
 * condicion con el operador logico or (||) nos retorna el primer valor verdadero que encuentra
 */

let nombre = 'Juan';
let username = nombre || 'anonimo';
console.log(username); //Juan

/**
 * En este caso la variable nombre tiene un valor, por lo tanto es verdadero, y al colocarla en una
 * condicion con el operador logico or (||) nos retorna el primer valor verdadero que encuentra
 */

function fn1() {
    console.log('Hola soy la funcion 1');
    return true;
}

function fn2() {
    console.log('Hola soy la funcion 2');
    return true;
}