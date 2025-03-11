// 📌 Crea un programa que pida al usuario una palabra y cuente cuántas vocales (a, e, i, o, u) tiene.
// 📌 Usa for of para recorrer la palabra y verificar cada letra.

let palabra = prompt('Introduce una palabra:').toLocaleLowerCase();

for( letra of palabra){
    console.log(letra);
}
