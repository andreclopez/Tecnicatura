import Producto from "../../Classes/Producto.js";
import Cart from "../../Classes/Carrito.js";

let contenedorTarjetas = document.getElementById("contenedorCart");
let cantidadElement = document.getElementById("cantidad");
let precioElement = document.getElementById("precio");
let carritoVacioElement = document.getElementById("cartVacio");
let contenedorTotales = document.getElementById("totales");

/** Crea las tarjetas de productos teniendo en cuenta lo guardado en localstorage */
function crearTarjetasProductosCarrito() {
    contenedorTarjetas.innerHTML = "";
    let productos = Cart.itemsCart;

    if (productos.length > 0) {
        productos.forEach((item) => {
            let producto = item.producto;
            let tarjetaProducto = document.createElement("div");
            tarjetaProducto.classList = "tarjeta-producto bg-violet-200 rounded-lg border border-gray-200 shadow-md overflow-hidden my-4";

            tarjetaProducto.innerHTML = `
                <div class="p-4 flex justify-between items-center">
                    <div class="flex items-center">
                        <img class="w-24 h-24 object-cover mr-4" src="${producto.imgProduct}" alt="${producto.nombre}">
                        <div>
                            <h5 class="text-xl font-semibold mb-2">${producto.nombre}</h5>
                            <p class="text-gray-700 mb-2">${producto.descripcion}</p>
                            <p class="text-gray-900 font-bold mb-4">Precio: $${producto.precio}</p>
                            <div class="flex items-center">
                                <label for="cantidad-${producto.codigo}" class="mr-2">Cantidad:</label>
                                <input type="number" id="cantidad-${producto.codigo}" class="cantidad border rounded px-2 py-1 w-16" value="${item.cantidad}" min="1" data-codigo="${producto.codigo}">
                            </div>
                        </div>
                    </div>
                    <button data-codigo="${producto.codigo}" class="eliminar bg-violet-600 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded">Eliminar</button>
                </div>
            `;

            contenedorTarjetas.appendChild(tarjetaProducto);

            tarjetaProducto.querySelector(".eliminar").addEventListener("click", (e) => {
                Cart.deleteProducto(e.target.dataset.codigo);
                crearTarjetasProductosCarrito();
                actualizarTotales();
            });

            tarjetaProducto.querySelector(".cantidad").addEventListener("change", (e) => {
                const nuevaCantidad = parseInt(e.target.value);
                Cart.editarProducto(e.target.dataset.codigo, nuevaCantidad);
                crearTarjetasProductosCarrito();
                actualizarTotales();
            });
        });

        revisarMensajeVacio();
        actualizarTotales();
    }
}

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
    let productos = Cart.itemsCart;
    let cantidad = 0;
    let precio = 0;

    if (productos.length > 0) {
        productos.forEach((item) => {
            cantidad += item.cantidad;
            precio += item.producto.precio * item.cantidad;
        });
    }

    cantidadElement.innerText = cantidad;
    precioElement.innerText = precio;

    if (precio === 0) {
        reiniciarCarrito();
        revisarMensajeVacio();
    }
}

document.getElementById("reiniciar").addEventListener("click", () => {
    contenedorTarjetas.innerHTML = "";
    reiniciarCarrito();
    revisarMensajeVacio();
});

/** Muestra u oculta el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
    let productos = Cart.itemsCart;
    let carritoVacio = productos.length === 0;

    carritoVacioElement.classList.toggle("escondido", !carritoVacio);
    contenedorTotales.classList.toggle("escondido", carritoVacio);
}

function reiniciarCarrito() {
    Cart.cleanCart();
    actualizarTotales();
    revisarMensajeVacio();
}

function comprar() {
    alert("Compra realizada con éxito");
    Cart.cleanCart();
    crearTarjetasProductosCarrito();
    actualizarTotales();
}

// Inicializar la vista del carrito y añadir event listeners cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    crearTarjetasProductosCarrito();
    document.getElementById("comprar").addEventListener("click", comprar);
    document.getElementById("reiniciar").addEventListener("click", reiniciarCarrito);
});
