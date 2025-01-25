
function hola() {
    console.log('Hola mundo');
    console.log(hola);
}

hola(); // llamada a la funcion hola

console.log("-------------------------------------------------");
// Funcion dentro de otra funcion
function saludo() {
    console.log('Hola mundo');
    function despedida() {
        console.log('Adios mundo');
    }
    despedida();
}

saludo(); // llamada a la funcion saludo

console.log("-------------------------------------------------");
console.log("funciones con parametros");
//funciones con parametros
function suma1(a, b) {
    console.log(a + b);
}

suma1(3, 5); // 8

console.log("-------------------------------------------------");
console.log("funciones con retorno");
//funciones con retorno
function suma2(a, b) {
    return a + b;
}

let resultado = suma2(3, 5);
console.log(resultado); // 8

console.log("-------------------------------------------------");
console.log("variables globales y locales");
//variables globales y locales
let a = 2;
let b = 3;

function suma3() {
    let a = 5;
    let b = 3;
    console.log(a + b);
}

suma3(); // 8
console.log(a + b); // 5

console.log("-------------------------------------------------");
//Dificultad extra
console.log("Dificultad extra");
function puntoExtra(parametro1, parametro2) {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        //primer y segundo parametro 
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, parametro1, parametro2);
        }
        //primer parametro
        else if (i % 3 === 0) {
            console.log(i, parametro1);
        }
        //segundo parametro
        else if (i % 5 === 0) {
            console.log(i,  parametro2);
        }
        else {
            count++;
        }
    }
    return count
}

let resultado2 = puntoExtra('Fizz', 'Buzz');
console.log(resultado2); // 67