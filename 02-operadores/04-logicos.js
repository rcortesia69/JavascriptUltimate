//AND, OR, NOT

let mayor = false;
let suscrito = true;

/**
 * En el caso de el operador logico and (&&) se evalua si ambas condiciones son verdaderas
 * en caso de que una de las dos sea falsa, el resultado sera falso
 */
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false 

//Vamos a ver un ejemplo real

console.log('Operador and', mayor && suscrito); //false
console/log('operador or', mayor || suscrito); //true

//NOT!
console.log('operador NOT', !mayor); //true
/**
 * En este caso el operador not (!) lo que hace es negar el valor de la variable
 * en este caso la variable mayor es false, pero al negarla se convierte en true
 */
 let soloCatalogoInfantil = !mayor;
 /**
  * En este caso la variable soloCatalogoInfantil es true, ya que la variable mayor es false
  * y al negarla se convierte en true
  */