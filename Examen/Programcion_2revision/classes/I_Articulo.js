export default class Articulo {
    static items = [];

    constructor(id, titulo, año) {
        this.id = id;
        this.titulo = titulo;
        this.año = año;

        console.log(`ID: ${this.id}, Titulo: ${this.titulo}, Año: ${this.año}`);
    }

    static crear(id, titulo, año) {
        let articulo = new Articulo(id, titulo, año);
        Articulo.items.push(articulo);
    }

    static eliminar(idArticulo) {
        Articulo.items = Articulo.items.filter(articulo => articulo.id !== idArticulo);
    }
}
