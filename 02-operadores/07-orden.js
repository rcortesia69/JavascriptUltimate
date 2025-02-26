let resultado = 8/2(2+2);
console.log(resultado); //4

/**
 * Aca nos va a arrojar un error porque entre los dos "2" hay un parentesis
 * la forma de colocarlo correctamente seria colocando el simbolo de multiplicacion antes.
 */

let resultado = 8/2*(2+2);
console.log(resultado); //4

//esta seria la forma correcta
//La manera de obtener un resultado diferente o por ejemplo
//que quieras agregar antes o despues una operacion seria encerrandola con parentesis

let resultado = 8/(2*(2+2));
console.log(resultado); //1
/**
 * Por ejemplo en este caso el resultado seria 1, ya que primero se realiza la operacion dentro del parentesis.
 */