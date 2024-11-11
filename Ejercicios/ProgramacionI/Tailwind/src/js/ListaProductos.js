import Producto from "../../Classes/Producto.js";
import Cart from "../../Classes/Carrito.js";

function updateVistaProductos() {
    let vistaProductos = document.getElementById("vistaProductos");
    vistaProductos.innerHTML = "";

    Producto.todosLosItems.forEach(producto => {
        let vistaItem = document.createElement("div");
        vistaItem.className = "bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3";

        vistaItem.innerHTML = `
            <div class="col-span-1 p-4 bg-violet-200">
                <img src="${producto.imgProduct}" alt="Imagen del producto" class="w-full h-full object-cover">
                <h2 class="text-lg font-bold mt-5">Producto: ${producto.nombre}</h2>
                <p>Descripción: ${producto.descripcion}</p>
                <p class="text-2xl font-semibold">Precio: $${producto.precio}</p>
                <button class="añadir focus:outline-none text-white bg-violet-600 hover:bg-violet-300 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-500 dark:hover:bg-purple-700 dark:focus:ring-purple-900" data-codigo="${producto.codigo}">Añadir al carrito</button>
            </div>
        `;
        vistaProductos.appendChild(vistaItem);
    });

    // AddEventListener para botón añadir
    document.querySelectorAll('.añadir').forEach(button => {
        button.addEventListener('click', (event) => {
            let codigoProducto = event.target.dataset.codigo;
            let producto = Producto.obtenerProducto(codigoProducto);
            if (producto) {
                Cart.addProducto(producto);
                updateContadorCart();
                alert(`${producto.nombre} ha sido añadido al carrito.`);
            } else {
                alert("Producto no encontrado.");
            }
        });
    });
}

// Actualizar el conteo de productos en el carrito
function updateContadorCart() {
    let contadorCart = Cart.itemsCart.reduce((total, item) => total + item.cantidad, 0);
    document.getElementById("contadorCart").textContent = contadorCart;
}

// Inicializar la vista de productos y actualizar el conteo del carrito cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    updateVistaProductos();
    updateContadorCart();  // Inicializar el conteo del carrito al cargar la página
});
