import Producto from "../../Classes/Producto.js";
import ProductoCarrito from "../../Classes/Carrito.js";

function vistaProductos() {
    let vistaProductosElement = document.getElementById("vistaProductos");
    vistaProductosElement.innerHTML = "";

    Producto.todosLosItems.forEach(producto => {
        vistaProductosElement.innerHTML += `
            <div class="bg-gray-100 p-2 overflow-hidden cursor-pointer">
                <div class="bg-white flex flex-col h-full">
                    <div class="w-full h-[250px] overflow-hidden mx-auto">
                        <img src="${producto.imgProduct}" alt="Imagen del producto" class="h-full w-full object-cover" />
                    </div>
                    <div class="p-6 text-center flex-1">
                        <h3 class="text-lg font-bold text-gray-800">${producto.nombre}</h3>
                        <h4 class="text-lg font-bold text-gray-800">${producto.descripcion}</h4>
                        <h5 class="text-xl text-gray-800 font-bold mt-3">$ ${producto.precio}</h5>
                    </div>
                    <button type="button" class="addToCart bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full" data-codigo="${producto.codigo}">Añadir al carrito</button>
                </div>
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
