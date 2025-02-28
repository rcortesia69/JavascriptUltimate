function cualEsMayor(a, b){
    if ( a> b) {
        return a;
    } else{
        return b;
    }
}

let mayor = cualEsMayor(10, 5);
console.log(mayor);

//otra  forma de hacerlo es la siguiente

function cualEsMayor(a, b){
    return a > b ? a : b;
}   

let mayor = cualEsMayor(10, 5);
console.log(mayor);