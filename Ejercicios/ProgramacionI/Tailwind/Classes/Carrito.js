import Producto from "../../classes/Producto.js";

export default class Carrito {
    static #cartItems = [];

    // Inicializar el carrito desde el localStorage si existe
    static {
        let cart = window.localStorage.getItem('cart');
        if (cart) {
            this.#cartItems = JSON.parse(cart).map(item => ({
                producto: new Producto(item.producto.codigo, item.producto.nombre, item.producto.descripcion, item.producto.precio, item.producto.imgProduct),
                cantidad: item.cantidad
            }));
        }
    }

    // Obtener todos los items del carrito
    static get itemsCart() {
        return this.#cartItems;
    }

    // Agregar un producto al carrito
    static addProducto(producto, cantidad = 1) {
        // Buscar si el producto ya está en el carrito
        let indiceProducto = this.#cartItems.findIndex(item => item.producto.codigo === producto.codigo);

        if (indiceProducto !== -1) {  // Comprobar que el producto está en el carrito
            // Si el producto ya está en el carrito, actualizar la cantidad
            this.#cartItems[indiceProducto].cantidad += cantidad;
        } else {
            // Si no está en el carrito, agregar un nuevo item
            this.#cartItems.push({ producto, cantidad });
        }

        this.#saveCart();
    }

    // Eliminar un producto del carrito
    static deleteProducto(codigoProducto) {
        this.#cartItems = this.#cartItems.filter(item => item.producto.codigo !== codigoProducto);
        this.#saveCart();
    }

    // Editar un producto del carrito
    static editarProducto(codigoProducto, nuevaCantidad) {
        let item = this.#cartItems.find(item => item.producto.codigo === codigoProducto);
        if (item) {
            item.cantidad = nuevaCantidad;
            this.#saveCart();
        } else {
            console.log("Producto no encontrado en el carrito");
        }
    }

    // Calcular el total del carrito
    static get total() {
        return this.#cartItems.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
    }

    // Calcular el subtotal de un producto
    static calcularSubtotal(codigoProducto) {
        let item = this.#cartItems.find(item => item.producto.codigo === codigoProducto);
        return item ? item.producto.precio * item.cantidad : 0;
    }

    // Guardar el carrito en el localStorage
    static #saveCart() {
        window.localStorage.setItem('cart', JSON.stringify(this.#cartItems));
    }

    // Limpiar el carrito (vaciarlo completamente)
    static cleanCart() {
        this.#cartItems = [];
        this.#saveCart();
    }
}
