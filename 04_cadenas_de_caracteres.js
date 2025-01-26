let cadena = "holas "
let cadena2 = "mundos"

//length
console.log("----------------- length -----------------")
console.log(cadena.length) //Devuelve la longitud de la cadena

//concat
console.log("----------------- concat -----------------")
console.log(cadena.concat(cadena2)) //Concatena dos cadenas

//indexOf
console.log("----------------- indexOf -----------------")
console.log(cadena.indexOf("a")) //Busca un caracter y devuelve la primera posicion encontrada

//lastIndexOf
console.log("----------------- lastIndexOf -----------------")
console.log(cadena.lastIndexOf("a")) //Busca un caracter y devuelve la ultima posicion encontrada

//replace
console.log("----------------- replace -----------------")
console.log(cadena.replace("a", "e")) //Reemplaza un caracter por otro

//split
console.log("----------------- split -----------------")
console.log(cadena.split("")) //Convierte la cadena en un array

//substring
console.log("----------------- substring -----------------")
console.log(cadena.substring(0, 3)) //Extrae una parte de la cadena

//substr
console.log("----------------- substr -----------------")
console.log(cadena.substr(0, 3)) //Extrae una parte de la cadena osea lo mismo que substring

//convertir a mayusculas
console.log("----------------- toUpperCase -----------------")
console.log(cadena.toUpperCase()) //Convierte la cadena a mayusculas

//convertir a minusculas
console.log("----------------- toLowerCase -----------------")
console.log(cadena.toUpperCase().toLowerCase()) //Convierte la cadena a minusculas

//Dificultad extra
console.log("----------------- Dificultad extra -----------------")

let cadena3 = "Hola mundo"
//Palindromo
console.log("----------------- Palindromo -----------------")
let anedac = cadena3.split("").reverse().join("")
if (cadena3 == anedac) {
    console.log("Es palindromo")
} else {
    console.log("No es palindromo")
}  
console.log("----------------- Anagrama -----------------")
let cadena4 = "Hola mundo"
let cadena5 = "mundo Hola"
let anedac2 = cadena4.split("").sort().join("")
let anedac3 = cadena5.split("").sort().join("")
if (anedac2 == anedac3) {
    console.log("Es anagrama")
} else {
    console.log("No es anagrama")
}
