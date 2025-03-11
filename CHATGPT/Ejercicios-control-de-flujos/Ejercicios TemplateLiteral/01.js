//**
// Hare varios ejercicios dadosmpor chatgpt
//  */

//Variables y tipos de datos:
//** 1.	Declara tres variables:
// 	Un número con tu edad.	
// Un string con tu nombre.	
// Un booleano que indique si tienes experiencia en programación.
//  */

let numero = 34;
let nombre = "Ricardo";
let tieneExperiencia = true;
//no se debe usar la palabra boolean en una variable ya que es una palabra reservada

//ejercicio2
//**
//  */2.	Cambia el valor de la variable numérica sumándole 5 y muestra el resultado en consola.

let numero = 34;
numero = numero + 5; // o también: numero += 5;
console.log(numero);

//tuve una correccion ya que smplemente le habia sumado el 5 a la variable principal en vez de modificarla con un numero nuevo por lo tanto me corrigio
//asi que se coloca la variable principal y se le suma el 5

//ejercicio3

const IVA = 21;
let producto = 100;
let valorProducto = producto*IVA/100;
console.log(valorProducto);

//**
// En este caso el ejercicio estuvo bien pero hay una mejor manera de hacerlo para mostrar el valor del iva y luego el valor
// del producto con el iva aplicado */

const IVA = 21;
let producto = 100;
let valorIVA = (producto * IVA) / 100; // Calcula solo el IVA
let precioFinal = producto + valorIVA; // Suma el IVA al precio base

console.log("Valor del IVA:", valorIVA);
console.log("Precio final con IVA:", precioFinal);

//**
// En este caso el valor se muestra el valor del producto mas el valor del iva */
//ejercicio4
//**
//  */

//ejercicio 5
const PI = 3.1416;
let radio = 5;
let resultado = PI * (radio**2)

console.log(resultado);

//ejercicio 6

let nombre = prompt("por favor ingresa tu nombre");
console.log("hola" +nombre+ ". bienvenido");

//**
// En este ejercicio chatgpt me indica que debia colocar el console log con los signos de + para colocar la variable
// cuando le pregunte porque me dio una explicacion y una manera mejor de imprimir el resultado
// con algo llamado template literals por ser mas leible */
//hare un archivo nuevo para hacer ejercicios de como imprimirlo
