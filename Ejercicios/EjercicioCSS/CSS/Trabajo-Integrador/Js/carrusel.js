const btnIzq = document.querySelector(".btnIzq"),
      btnDer = document.querySelector(".btnDer"),
      slider = document.querySelector("#slider"),
      seccionSlider = document.querySelectorAll(".seccionSlider");


btnIzq.addEventListener("click", e => moveToIzq())
btnDer.addEventListener("click", e => moveToDer())

setInterval(() => {
    moveToDer()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / seccionSlider.length;

function moveToDer() {
    if (counter >= seccionSlider.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToIzq() {
    counter--;
    if (counter < 0 ) {
        counter = seccionSlider.length-1;
        operacion = widthImg * (seccionSlider.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   