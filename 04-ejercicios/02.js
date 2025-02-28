function nombreResolucion(ancho, alto){
    if (ancho === 7680 && alto === 4320) {
        return "8K UHD";
    } else if (ancho === 3840 && alto === 2160) {
        return "4K UHD";
    } else if (ancho === 1920 && alto === 1080) {
        return "Full HD";
    } else if (ancho === 2560 && alto === 1440) {
        return "2K";
    } else if (ancho === 1280 && alto === 720) {
        return "HD";
    } else {
        return "Otras resoluciones";
    }
}

 let nombre = nombreResolucion(1366, 768);
 console.log(nombre);

 //otra manera de resolverlo es la siguiente

 function nombreResolucion(ancho, alto){
    switch (ancho && alto) {
        case 7680 && 4320:
            return "8K UHD";
            break;
        case 3840 && 2160:
            return "4K UHD";
            break; 
        case 1920 && 1080:
            return "Full HD";
            break;
        case 2560 && 1440:
            return "2K";
            break;  
        case 1280 && 720:
            return "HD";
            break;  
        default:
            return "Otras resoluciones";
    }

let nombre = nombreResolucion(1366, 768);
console.log(nombre);

//otra manera de resolverlo es

function nombreResolucion(ancho, alto){
    return ancho === 7680 && alto === 4320 ? "8K UHD" :
           ancho === 3840 && alto === 2160 ? "4K UHD" :
           ancho === 1920 && alto === 1080 ? "Full HD" :
           ancho === 2560 && alto === 1440 ? "2K" :
           ancho === 1280 && alto === 720 ? "HD" :
           "Otras resoluciones";
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);