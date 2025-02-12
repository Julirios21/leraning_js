let btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
    event.preventDefault()
    let nam = document.getElementById("name").value
    let pas = document.getElementById("password").value

    console.log("tu nombre es: "+ nam)
    console.log("tu contraseña es: "+ pas)
})