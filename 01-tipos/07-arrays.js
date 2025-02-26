let animales = ['chanchito', 'caballo'];

console.log(animales);
//para acceder a un elemento especifico
console.log(animales[1]);

//para agregar un nuevo elemento
animales[2] = 'dragon';
console.log(animales);

//vamos a crear un nuevo elemento pero que no siga la secuencia
animales[10] = 'perro';
console.log(animales);
console.log(typeof animales); //object
//Se comporta como un objeto y lo importanter es saber que se puede aprovechar de las propiedaddes de que sea un opbjeto
console.log(animales.length) //11