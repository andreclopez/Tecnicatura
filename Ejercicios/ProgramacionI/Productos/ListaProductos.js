import Producto from "./Classes/Productos.js";

function updateTablaProducto1() {
    let tablaProducto1 = document.getElementById("tablaProducto1");
    tablaProducto1.innerHTML = "";

    Producto.todosLosItems.forEach(producto => {
        tablaProducto1.innerHTML += `
            <div class="tarjetaProducto" id="${producto.codigo}">
                <img src="${producto.imgProduct}" alt="Imagen del producto">
                <p>Producto: ${producto.nombre}</p>
                <p>Descripción: ${producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
                <button data-codigo="${producto.codigo}" class="comprar">Comprar Producto</button>
            </div>
        `;
    });
    
}

updateTablaProducto1();
