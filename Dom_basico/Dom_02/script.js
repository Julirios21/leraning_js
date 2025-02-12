let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let pe = document.getElementById("cambiar");
    
    if (pe.hasAttribute("hidden")) {
        pe.removeAttribute("hidden"); // Lo mostramos
    } else {
        pe.setAttribute("hidden", "true"); // Lo ocultamos
    }
});