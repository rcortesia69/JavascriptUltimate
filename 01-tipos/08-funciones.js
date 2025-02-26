function saludar() {
    console.log('Hola mundo');
}
//de esta manera llamamos al resultado de la funcion
saludar();
//mientras no coloquemos este no aparecera nada.

//ahora vemos la manera de colocar una funcion que podemos reutilizar
function suma() {
    return 2 + 2;
}

//con return podemos hacer luego reutiulizar el resultado en otras variables

let resultado = suma();
console.log(resultado);

//aqui asignamos a esta variable el resultado de suma y luego la imprimimos