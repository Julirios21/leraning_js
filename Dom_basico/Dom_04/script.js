let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    let imagen = document.getElementById('imagen')

    if (imagen.getAttribute("alt") ==="imagen de goku blue"){
        imagen.setAttribute("src", "vegeta.png")
        imagen.setAttribute("alt", "Imagen de Vegeta blue");
    } else if (imagen.getAttribute("alt") ==="Imagen de Vegeta blue"){
        imagen.setAttribute("src", "goku.png")
        imagen.setAttribute("alt", "imagen de goku blue");
    }

})