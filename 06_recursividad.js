//Funcion recursiva

//Funcion recursiva
function f1(num1){
    if (num1 <= 100){
        console.log(num1)
        num1++
        f1(num1)
    }else
        return
}

var num1 = 0;
f1(num1)

// // Dificultad extra
// console.log("----------------- Dificultad extra -----------------")

// //- Calcular el factorial de un número concreto (la función recibe ese número).

// function f2(num2,count){
//     if (num2 > 1){
//         count = count * num2
//         num2--
//         f2(num2,count)
//     }else
//         return
// }

// var num2 = 5;
// f2(num2,1)