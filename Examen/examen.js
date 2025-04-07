console.log("Examen")

// Teniendo una variable numérica que representa el número de lados de una
// figura geométrica, mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:
// Círculo: si el número de lados es 0.
// Triángulo: si el número de lados es 3.
// Cuadrado: si el número de lados es 4.
// Pentágono: si el número de lados es 5.
// Hexágono: si el número de lados es 6.
// Polígono: si el número de lados es mayor que 6.
// Asegúrate de incluir un mensaje de error si el número de lados es menor
// o igual a cero.

console.log("Examen")

function tipoFigura(lados){

    if(lados == 0){
        return "Círculo"
    } 
    
    if(lados == 3){
        return "Triángulo"
    } 
    
    if(lados == 4){
        return "Cuadrado"
    } 
    
    if(lados == 5){
        return "Pentágono"
    } 
    
    if(lados == 6){
        return "Hexágonos"

    } if(lados > 6){
        
        return "Polígono"
    } 
    
    if(lados == 2 || lados < 0 || lados == 1){

        return "Ingrese una cantidad de lados válida"
    }
        
}

let lados = prompt("Ingrese cantidad de lados")

console.log(tipoFigura(lados))

const pi = 3.1416

let radio = 2.5

let perimetro = (2 * pi * radio)

console.log("El perímetro del círculo es", perimetro)

let lado3 = 3;

let perimetro3 = (lado3 * 3);

console.log("El perímetro del triángulo es", perimetro3)

let lado4 = 10;

let perimetro4 = (lado4 * 4);

console.log("El perímetro del cuadrado es", perimetro4)

let lado5 = 3.5;

let perimetro5 = (lado5 * 5);

console.log("El perímetro del pentágono es", perimetro5)

let lado6 = 2;

let perimetro6 = (lado6 * 6);

console.log("El perímetro del hexágono es", perimetro6)

let ladopoli = 8;

let perimetropoli = (ladopoli * 7);

console.log("El perímetro del poligono, lado 7, es", perimetropoli)

