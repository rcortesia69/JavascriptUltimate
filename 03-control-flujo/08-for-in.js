/**\
 * para explicar el for in tenemos que primero crear un objeto ya que se utiliza para iterar sobre las propiedades de un objeto
 */
let user = {
    ide: 1,
    name: 'Juan',
    age: 30,

}

for (let prop in user) {
    console.log(prop, user[prop]);
}

/**
 * Aqui basicamente estamos especifricando que queremos recorrer las propiedades de user, y que queremos que se
 * imprima el nombre de la propiedad y el valor de la propiedad, en este caso se imprime ide 1, name Juan, age 30
 */