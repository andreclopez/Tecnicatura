let nav = document.querySelector("#nav");
let abrirMenu = document.querySelector("#abrirMenu");
let cerrarMenu = document.querySelector("#cerrarMenu");

abrirMenu.addEventListener("click", () =>{
    nav.classList.add("visible");
})

cerrarMenu.addEventListener("click", () =>{
    nav.classList.remove("visible");
})