export default class Producto {
    static #items = [];

    // Inicialización estática para cargar productos desde localStorage
    static {
        let productos = window.localStorage.getItem('productos');
        if (productos) {
            this.#items = JSON.parse(productos).map(item => new this(item.codigo, item.nombre, item.descripcion, item.precio, item.imgProduct));
        }
    }

    // Obtener todos los productos
    static get todosLosItems() {
        return this.#items;
    }

    // Guardar productos en localStorage
    static #saveProduct() {
        window.localStorage.setItem('productos', JSON.stringify(this.#items));
    }

    // Obtener un producto por su código
    static obtenerProducto(codigoProducto) {
        return this.#items.find(producto => producto.codigo === codigoProducto);
    }

    // Crear un nuevo producto
    static crear(codigo, nombre, descripcion, precio, imgProduct) {
        let producto = new Producto(codigo, nombre, descripcion, precio, imgProduct);
        this.#items.push(producto);
        this.#saveProduct();
        return producto;
    }

    // Eliminar un producto por su código
    static eliminar(codigoProducto) {
        this.#items = this.#items.filter(producto => producto.codigo !== codigoProducto);
        this.#saveProduct();
    }

    // Editar un producto existente
    static editar(codigoProducto, nombre, descripcion, precio, imgProduct) {
        let productoActualizado = this.obtenerProducto(codigoProducto);
        if (productoActualizado) {
            productoActualizado.nombre = nombre;
            productoActualizado.descripcion = descripcion;
            productoActualizado.precio = precio;
            productoActualizado.imgProduct = imgProduct;
            this.#saveProduct();
        }
    }

    // Constructor de la clase Producto
    constructor(codigo, nombre, descripcion, precio, imgProduct) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imgProduct = imgProduct;
        console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Descripción: ${this.descripcion}, Precio: ${this.precio}, Imagen: ${this.imgProduct}`);
    }
}
