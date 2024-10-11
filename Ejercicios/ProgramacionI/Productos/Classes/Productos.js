export default class Producto{
    static #items = [];

    static {
        let productos = window.localStorage.getItem(`productos`);
        if (productos) {
            this.#items = JSON.parse(productos).map(item => new this(item.codigo, item.nombre, item.descripcion, item.precio))
        }
    }

    static get todosLosItems() {
        return this.#items;
    }

    static #saveProduct(){
        window.localStorage.setItem(`productos`, JSON.stringify(this.#items))
    }

    static obtenerProducto(codigoProducto){
        return Producto.#items.find(producto => producto.codigo === codigoProducto);        
    }

    static crear(codigo, nombre, descripcion, precio){
        let producto = new Producto(codigo, nombre, descripcion, precio); 
        this.#items.push(producto);
        this.#saveProduct();

        return producto
    }

    static eliminar(codigoProducto){
        this.#items = this.#items.filter(producto => producto.codigo !== codigoProducto);
        this.#saveProduct();
    }

    static editar(codigoProducto, nombre, descripcion, precio){
        let productoActualizado = Producto.#items.find(producto => producto.codigo === codigoProducto);
        if(productoActualizado){
            productoActualizado.nombre = nombre;
            productoActualizado.descripcion = descripcion;
            productoActualizado.precio = precio;
            this.#saveProduct();
        }        
    }

    constructor(codigo, nombre, descripcion, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;

        console.log(`Codigo: ${this.codigo}, Nombre: ${this.nombre}, Descripcion: ${this.descripcion}, Precio: ${this.precio}`);

    }
}