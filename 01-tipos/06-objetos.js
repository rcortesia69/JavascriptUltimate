//Personaje de Tv

let nombre = "tanjiro";
let anime = "demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
}

//si queremos que nos muestre el personaje completo colocamos
console.log(personaje);

//si queremos solo una propiedad o atributo del personaje colocamos

console.log(personaje.edad);

//otra manera de ver una sola propiedad es:
console.log(personaje["anime"]);

//para cambiar el valor de la propiedad

personaje.edad = 17;
//o
personaje["edad"] = 17;