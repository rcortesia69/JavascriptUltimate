for (i = 1, i <= 20, i++){
    if (i % 2 == 0){
        console.log(`Numero ${i}`)
    }
}

//**
// La correccion fue la siguiente, primero, coloque , en vez de ; cuando declare el for
// y segundo que al principio para declarar i debo colocarle let  
// el codigo queda de la siguiente manera*/

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) { // Verifica si i es par
        console.log(`Número ${i}`);
    }
}