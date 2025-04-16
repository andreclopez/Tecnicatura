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

// Resuelto en clase
// class Estudiante {
// constructor (nombre, calificaciones) {
// this.nombre= nombre
// this.calificaciones = calificaciones
//  }

// promedio (){
//  return this.calificaciones.reduce((sumatoria,calificacion) => sumatoria + calificacion, 0) / this.calificaciones.length
// }
//}

// Con for each:
// let sumatoria = 0 
// return this.calificaciones.forEach((calificacion) => {
//   sumatoria = sumatoria +calificaciones
//})
// return sumatoria / this.calificaciones.length