//Asignación por valor
console.log("----------------- Asignación por valor -----------------")
let value1 = "Hola mundo"
let value2 = value1

value2 = "Adios mundo"


console.log(value1) //Hola mundo
console.log(value2) //aduis mundo

//Asignación por referencia
console.log("----------------- Asignación por referencia -----------------")
let referencia1 = {
    nombre: "Juan"
}
let referencia2 = referencia1

referencia2.nombre = "Pedro"

console.log(referencia1) //{nombre: "Pedro"}
console.log(referencia2) //{nombre: "Pedro"}

console.log(typeof referencia1) 