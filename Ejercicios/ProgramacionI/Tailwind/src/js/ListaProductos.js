import Producto from "../../Classes/Producto.js";
import ProductoCarrito from "../../Classes/Carrito.js";

function vistaProductos() {
    let vistaProductosElement = document.getElementById("vistaProductos");
    vistaProductosElement.innerHTML = "";

    Producto.todosLosItems.forEach(producto => {
        vistaProductosElement.innerHTML += `
            <div class="col-span-1 p-4 bg-violet-200">
                <img src="${producto.imgProduct}" alt="Imagen del producto" class="w-full h-full object-cover">
                <h2 class="text-lg font-bold mt-5">Producto: ${producto.nombre}</h2>
                <p>Descripción: ${producto.descripcion}</p>
                <p class="text-2xl font-semibold">Precio: $${producto.precio}</p>
                <button class="addToCart focus:outline-none text-white bg-violet-600 hover:bg-violet-300 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-500 dark:hover:bg-purple-700 dark:focus:ring-purple-900" data-codigo="${producto.codigo}">Añadir al carrito</button>
            </div>
        `;
    });
}

vistaProductos();
updateCarrito();

function updateCarrito() {
    let cantidadCarrito = ProductoCarrito.todosLosItems.reduce((total, item) => total + item.cantidad, 0);
    document.getElementById("contadorCart").innerText = cantidadCarrito;
}

// Agregar al carrito
document.getElementById("vistaProductos").addEventListener("click", (e) => {
    if (e.target.className.includes("addToCart")) {
        let producto = Producto.obtenerProducto(e.target.dataset.codigo);

        if (producto) {
            let productoCarrito = ProductoCarrito.obtenerProducto(producto.codigo);
            
            if (!productoCarrito) {
                let values = {
                    producto: producto,
                    cantidad: 1,
                    subtotal: producto.precio
                };
                ProductoCarrito.crear(values);
            } else {
                ProductoCarrito.sumarCantidad(producto.codigo);
            }
            
            vistaProductos();
            updateCarrito();
        }
    }
});
