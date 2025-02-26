function suma() {
    return 2 + 2;
}
//para hacer un poco mas flexible la funcion podemos hacer lo siguiente
function suma(a){
    return a + 2;
}

let resultado = suma(5);
console.log(resultado);
//de esta manera podemos ser flexibles ya que el resultado va a ser lo que le asignamos a la variable 
//mas lo que aparece en la funcion
/**
 * Tambien podemos colocar distintos parametros 
 * y argumentos, entendiendo que los parametros se refieren
 * a "a" o "b" y los argumentos son los valores asignados a esos parametros
 * por ejemplo:
 */

function suma(a, b){
    return a + b;
}

//aqui le estamos colocando 2 parametros  por lo tanto tenemos que darle dos arghumentos

let resultado = suma(5, 3);
console.log(resultado);
//aqui colocamos e imprimimos el argumento de dos parametros