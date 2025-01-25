// Arrays
let array1 = [2, 3, 1, 9, 2];
let array2 = ["a", "b", "c", "d", "e"];

//object
let object1 = {
    name: "Juan",
    age: 25,
    city: "Bogota"
}

//string
let string1 = "Hola mundo"

//number 
let number1 = 5

//boolean
let boolean1 = true

//set 
let Myset = new Set()
Myset.add(6)
Myset.add(6) //no se repite, es mas, se ingora

/*
set solo permite valores unicos, es decir no se repite ni la misma cadena ni el mismo numero
ni el mismo objeto ni el mismo array ni el mismo boolean ni el mismo set ni el mismo map ni el 
mismo weakset ni el mismo weakmap ni el mismo symbol ni el mismo null ni el mismo undefined 
ni el mismo function ni el mismo bigint ni el mismo date ni el mismo regexp
*/

//map
let map = new Map()
map.set("name", "Juan")
map.set("age", 25)
map.set("city", "Bogota")

console.log(map)
/*
Map es un conjunto de tuplas
*/

//symbol
let symbol1 = Symbol("symbol")
let symbol2 = Symbol("symbol")

console.log(symbol1 === symbol2) //false, aunque tengan el mismo nombre, son diferentes

//Ordenar array
console.log("----------------- arrays -----------------")
//ordenar array
array1.sort((a, b) => a - b) //Short odena arrays
console.log(array1)

//eliminar elementos
console.log("----------------- eliminar elementos -----------------")
array1.pop() //Elimina el ultimo elemento
console.log(array1)
array1.shift() //Elimina el primer elemento
console.log(array1)

//agregar elementos
console.log("----------------- agregar elementos -----------------")
array1.push(10) //Agrega un elemento al final
console.log(array1)
array1.unshift(0) //Agrega un elemento al principio
console.log(array1)

//cortar array
console.log("----------------- cortar array -----------------")
let arrayCortado = array1.slice(0, 2) //Corta el array
console.log(arrayCortado)

//buscar elementos
console.log("----------------- buscar elementos -----------------")
let index = array1.indexOf(9) //Busca un elemento, si no lo encuentra devuelve -1
index = array1.indexOf(2) //Busca un elemento y devuelve la primera posicion encontrada
console.log(index)


console.log("----------------- objetos -----------------")
//Object
console.log(object1)
console.log(object1.name)
console.log(object1.age)
console.log(object1.city)

//Object.keys
console.log("----------------- Object.keys -----------------")
console.log(Object.keys(object1)) //Devuelve las llaves del objeto

//Object.values
console.log("----------------- Object.values -----------------")
console.log(Object.values(object1)) //Devuelve los valores del objeto

//Object.entries
console.log("----------------- Object.entries -----------------")
console.log(Object.entries(object1)) //Devuelve las llaves y los valores del objeto

//Object.assign
console.log("----------------- Object.assign -----------------")
let object2 = {
    name: "Juan",
    age: 25,
    city: "Bogota"
}
let object3 = {
    name: "Pedro",
    age: 30,
    city: "Medellin"
}
let object4 = Object.assign(object3, object2) //Une dos objetos
console.log(object4)  

//Object.freeze
console.log("----------------- Object.freeze -----------------")
// Object.freeze(object1) //Congela el objeto
// object1.name = "Pedro" //esta comentado porque no se puede modificar un objeto congelado, por ende da error al ejecutar
console.log(object1)

//Object.seal
console.log("----------------- Object.seal -----------------")
Object.seal(object1) //Sella el objeto
object1.name = "Pedrosqui" //Se puede modificar el objeto
console.log(object1)

//Object.isFrozen
console.log("----------------- Object.isFrozen -----------------")
console.log(Object.isFrozen(object1)) //Devuelve true si el objeto esta congelado

//Object.isSealed
console.log("----------------- Object.isSealed -----------------")
console.log(Object.isSealed(object1)) //Devuelve true si el objeto esta sellado


// Dificultad extra
console.log("----------------- Dificultad extra -----------------")

let agenda = new Map([
    ["Juan", 123456789],
    ["Pedro", 987654321]
])
let op = 1
while(op != 0){
    console.log("----------Menu--------")
    console.log("opcion0 -> salir")
    console.log("opcion1 -> busqueda")
    console.log("opcion2 -> insercion")
    console.log("opcion3 -> actualizacion")
    console.log("opcion4 -> eliminacion de contactos")
    console.log("opcion5 -> lista de contactos")
    op = parseInt(prompt("Ingrese una opcion ->"))
    if(op == 1){
        let contacto = prompt("Ingrese el nombre del contacto ->")
        console.log(agenda.get(contacto))
    }
    else if(op == 2){
        let contacto = prompt("Ingrese el nombre del contacto ->")
        let numero = parseInt(prompt("Ingrese el numero del contacto ->"))
        agenda.set(contacto, numero)
    }
    else if(op == 3){
        let contacto = prompt("Ingrese el nombre del contacto ->")
        if (agenda.has(contacto)){
            let numero = parseInt(prompt("Ingrese el numero del contacto ->"))
            agenda.set(contacto, numero)
        }
    }
    else if(op == 4){
        let contacto = prompt("Ingrese el nombre del contacto ->")
        agenda.delete(contacto)
    }
    else if(op == 5){
        console.log(agenda)
    }
    else if(op == 0){
        console.log("Adios")
    }
    else{
        console.log("Opcion invalida")
        op = 0
    }
}