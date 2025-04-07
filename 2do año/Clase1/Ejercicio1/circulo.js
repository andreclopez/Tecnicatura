// Crea una clase llamada Circulo que reciba un radio en su constructor y 
// tenga dos métodos: area(): Retorna el área del círculo.
// perimetro(): Retorna el perímetro del círculo.

class Circulo {

    area() {
        return parseFloat((Math.PI * Math.pow(this.radio, 2)).toFixed(2));
    }

    perimetro() {
        return parseFloat((2 * Math.PI * this.radio).toFixed(2));
    }

    constructor(radio) {
        this.radio = radio;
    }
}

const c = new Circulo(5);
console.log(c.area()); // 78.54
console.log(c.perimetro()); // 31.42
