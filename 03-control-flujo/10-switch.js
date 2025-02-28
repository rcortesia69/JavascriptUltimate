let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('accion de listar');
        break;
    case 'guardar':
        console.log('accion de guardar');
        break;
    default:
        console.log('accion no soportada');
}

/**
 * El ejemplo es un poco complicado de deducir, pero es un switch
 * otro ejemplo con comida seria mas facvil aplicacndo o sgiuiente
 */

let comida = 'pizza';

switch (comida) {
    case 'pizza':
        console.log('Has elegido pizza. ¡Deliciosa!');
        break;
    case 'hamburguesa':
        console.log('Has elegido hamburguesa. ¡Genial!');
        break;
    case 'ensalada':
        console.log('Has elegido ensalada. ¡Saludable!');
        break;
    default:
        console.log('Comida no reconocida');
}