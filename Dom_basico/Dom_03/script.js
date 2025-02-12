let btn = document.getElementById("btn")

let count = 0
btn.addEventListener("click", () =>{
    count ++
    let co = document.getElementById("contador")
    co.innerText = count
})