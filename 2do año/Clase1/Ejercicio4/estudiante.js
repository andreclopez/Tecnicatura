//Crea una clase Estudiante que reciba un nombre y un array de calificaciones en su constructor. Agrega un método promedio() 
//que calcule el promedio de las calificaciones.

class Estudiante {

    promedio() {
        let notas = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0)
        return notas / this.calificaciones.length;
    }

    constructor (nombre, calificaciones){
        this.nombre = nombre;
        this.calificaciones = calificaciones;
        console.log(`Nombre: ${this.nombre}, Calificaciones: ${this.calificaciones}`);

    }
}

const estudiante = new Estudiante ("Andrea", [90, 80, 100, 70]);
console.log("Promedio del estudiante:", estudiante.promedio());