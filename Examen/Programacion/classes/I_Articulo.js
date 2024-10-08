export default class Producto {

    static items = [];

    constructor(id, titulo, año) {
        this.id = id;
        this.titulo = titulo;
        this.año = año;
        console.log(`Id: ${this.id}, Titulo: ${this.titulo}, Año: ${this.año}`);
    }

    static crear(id, titulo, año) {
        let producto = new Producto(id, titulo, año);
        Producto.items.push(producto);

    }

    static eliminar(idProducto){
        Producto.items = Producto.items.filter()
    }


}