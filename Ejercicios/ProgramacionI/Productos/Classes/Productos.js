export default class Producto{
    static items = [];

    constructor(codigo, nombre, descripcion, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;

        console.log(`Codigo: ${this.codigo}, Nombre: ${this.nombre}, Descripcion: ${this.descripcion}, Precio: ${this.precio}`);

    }

    static crear(codigo, nombre, descripcion, precio){
        let producto = new Producto(codigo, nombre, descripcion, precio); 
        Producto.items.push(producto);
    }

    static eliminar(codigoProducto){
        Producto.items = Producto.items.filter(producto => producto.codigo !== codigoProducto);
    }
}