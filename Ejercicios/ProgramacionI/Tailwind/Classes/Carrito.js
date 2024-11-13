import Producto from "../../classes/Producto.js";

export default class ProductoCarrito {
    static #items = [];

    static {
        let productoCarrito = window.localStorage.getItem('productoCarrito');
        if (productoCarrito) {
            this.#items = JSON.parse(productoCarrito).map(item =>
                new this(
                    new Producto(item.producto.codigo, item.producto.nombre, item.producto.descripcion, item.producto.precio, item.producto.imgProduct),
                    item.cantidad,
                    item.subtotal
                )
            );
        }
    }

    constructor(producto, cantidad, subtotal) {
        this.producto = producto;
        this.cantidad = parseInt(cantidad);
        this.subtotal = parseFloat(subtotal);
    }

    // Obtener todos los productos
    static get todosLosItems() {
        return this.#items;
    }

    // Obtener un producto por su código
    static obtenerProducto(codigoProducto) {
        return this.#items.find(item => item.producto.codigo === codigoProducto);
    }

    // Crear
    static crear({ producto, cantidad, subtotal }) {
        let item = new this(producto, cantidad, subtotal);
        this.#items.push(item);
        this.#saveProduct();

        return item;
    }

    // Sumar cantidad
    static sumarCantidad(codigoProducto) {
        let item = this.obtenerProducto(codigoProducto);
        if (item) {
            item.cantidad++;
            item.subtotal = item.cantidad * item.producto.precio;
            this.#saveProduct();
        }
    }

    // Restar cantidad
    static restarCantidad(codigoProducto) {
        let item = this.obtenerProducto(codigoProducto);
        if (item) {
            item.cantidad--;
            if (item.cantidad <= 0) {
                this.eliminar(codigoProducto);
                return;
            }
            item.subtotal = item.cantidad * item.producto.precio;
            this.#saveProduct();
        }
    }

    // Eliminar un producto por su código
    static eliminar(codigoProducto) {
        this.#items = this.#items.filter(item => item.producto.codigo !== codigoProducto);
        this.#saveProduct();
    }

    // Guardar productos 
    static #saveProduct() {
        window.localStorage.setItem('productoCarrito', JSON.stringify(this.#items));
    }
}
