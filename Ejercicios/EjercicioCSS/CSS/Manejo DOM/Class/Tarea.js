export default class Tarea {
    // creación de la propiedad estática para almacenamiento
    static tareas = [];

    // creación del constructor
    constructor(codigo, titulo, detalle, dia, horario) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.detalle = detalle;
        this.dia = dia;
        this.horario = horario;

        console.log(`Codigo: ${this.codigo}, Titulo: ${this.titulo}, Detalle: ${this.detalle}, Día: ${this.dia}, Horario: ${this.horario}`);
    }

    // creación método estático crear
    static crear(codigo, titulo, detalle, dia, horario) {
        let tarea = new Tarea(codigo, titulo, detalle, dia, horario);
        Tarea.tareas.push(tarea);
    }

    // creación método estático eliminar
    static eliminar(codigoTarea) {
        Tarea.tareas = Tarea.tareas.filter(tarea => tarea.codigo !== codigoTarea);
    }

    // creación método estático marcar como hecho
    static marcarComoHecho(codigoTarea) {
    Tarea.tareas = Tarea.tareas.map(tarea => {
        if (tarea.codigo === codigoTarea) {
            tarea.hecha = !tarea.hecha;
        }
        return tarea;
        });
    }
}