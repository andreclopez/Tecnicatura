// Crea una clase llamada Circulo que reciba un radio en su constructor y 
// tenga dos métodos: area(): Retorna el área del círculo.
// perimetro(): Retorna el perímetro del círculo.

class Circulo {
    area() {
        return Math.PI * Math.pow(this.radio, 2);
    }

    perimetro() {
        return 2 * Math.PI * this.radio;
    }

    constructor(radio) {
        this.radio = radio;
    }
}

const c = new Circulo(5);
console.log("Area:",c.area());
console.log("Perimetro",c.perimetro());
