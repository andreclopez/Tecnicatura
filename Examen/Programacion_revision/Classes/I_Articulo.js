export default class Articulo {
    // creación de la propiedad estática para almacenamiento
    static items = [];

    // creación del constructor
    constructor(id, titulo, año) {
        this.id = id;
        this.titulo = titulo;
        this.año = año;

        console.log(`ID: ${this.id}, Titulo: ${this.titulo}, Año: ${this.año}`);
    }

    // creación método estático crear
    static crear(id, titulo, año) {
        let articulo = new Articulo(id, titulo, año);
        Articulo.items.push(articulo);
    }

    // creación método estático eliminar
    static eliminar(idArticulo) {
        Articulo.items = Articulo.items.filter(articulo => articulo.id !== idArticulo);
    }
}
