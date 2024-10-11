import Producto from "./Classes/Productos.js";

function updateTablaProducto(){
    let tablaProducto = document.getElementById("tablaProducto");
    tablaProducto.innerHTML = "";

    Producto.items.forEach(producto => {
        tablaProducto.innerHTML +=`
        <tr id="${producto.codigo}">
                <td>${producto.codigo}</td>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>
                    <button data-codigo="${producto.codigo}" class="eliminar">Eliminar</button>
                </td>
        </tr>

        `;
    });

}

updateTablaProducto();

// Botón agregar Producto
document.getElementById("agregar").addEventListener("click", () => {
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;

    Producto.crear(codigo, nombre, descripcion, precio);
    document.getElementById("formProducto").reset();
    updateTablaProducto();

});

// Botón eliminar Producto 
document.getElementById("tablaProducto").addEventListener("click", (event) =>{
    if (event.target.className === "eliminar") {
        let codigoProducto = event.target.dataset.codigo;
        Producto.eliminar(codigoProducto);
        updateTablaProducto();
    }
});