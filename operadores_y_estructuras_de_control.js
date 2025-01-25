let point1 = 3
let point2 = 5


// operadores aritmeticos	
// suma
console.log(point1 + point2) // 8
// resta   
console.log(point1 - point2)// -2
// multiplicacion
console.log(point1 * point2)// 15
// division
console.log(point1 / point2)// 0.6
// potencia
console.log(point1 ** point2)// 243


// operadores relacioneles
// mayor que
console.log(point1 > point2)// false
// menor que
console.log(point1 < point2)// true
// mayor o igual que
console.log(point1 >= point2)// false
// menor o igual que
console.log(point1 <= point2)// true
// igual que
console.log(point1 == point2)// false
// diferente de
console.log(point1 != point2)// true


// operadores logicos
// and
console.log(point1 > 0 && point2 > 0)// true
// or
console.log(point1 > 0 || point2 > 0)// true
// not
console.log(!(point1 > 0))// false

// operadores de asignacion
// suma y asigna
point1 += 1 // point1 = point1 + 1
// resta y asigna
point1 -= 1 // point1 = point1 - 1
// multiplicacion y asigna
point1 *= 1 // point1 = point1 * 1
// division y asigna
point1 /= 1 // point1 = point1 / 1
// potencia y asigna
point1 **= 1 // point1 = point1 ** 1

// operador de identidad
/*
    in js dosent exist the operator is and is  not, is originaly for python
*/
// identidad
console.log(point1 === point2)// false
// no identidad
console.log(point1 !== point2)// true
// instancia de Number
console.log(point1 instanceof Number)// false 
// instancia de String
console.log(point1 instanceof String)// false


// Dificultad extra

console.log('----------------')
for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
        console.log(i);
    }
}