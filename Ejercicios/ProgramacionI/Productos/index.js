import Producto from "./Classes/Productos.js";

function updateTablaProducto(){
    let tablaProducto = document.getElementById("tablaProducto");
    tablaProducto.innerHTML = "";

    Producto.todosLosItems.forEach(producto => {
        tablaProducto.innerHTML +=`
        <tr id="${producto.codigo}">
                <td>${producto.codigo}</td>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>
                    <button data-codigo="${producto.codigo}" class="eliminar">Eliminar</button>
                    <button data-codigo="${producto.codigo}" class="editar">Editar</button>
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

    if (document.getElementById("agregar").innerText === "Agregar producto") {
        Producto.crear(codigo, nombre, descripcion, precio);
    } else {
        Producto.editar(codigo, nombre, descripcion, precio);
        document.getElementById("agregar").innerText = "Agregar producto";
    }
    document.getElementById("formProducto").reset();
    updateTablaProducto();

});

// Botón eliminar Producto 
document.getElementById("tablaProducto").addEventListener("click", (event) =>{
    if (event.target.className === "eliminar") {
        let codigoProducto = event.target.dataset.codigo;
        console.log("Producto a eliminar: ", codigoProducto)

        Producto.eliminar(codigoProducto)

        updateTablaProducto();
    }

// Botón editar Producto
    if (event.target.className === "editar") {
        let button = event.target;
        let codigoProducto = button.dataset.codigo;
        let productoAEditar = Producto.obtenerProducto(codigoProducto);

        document.getElementById("codigo").value = productoAEditar.codigo;
        document.getElementById("nombre").value = productoAEditar.nombre;
        document.getElementById("descripcion").value = productoAEditar.descripcion;
        document.getElementById("precio").value = productoAEditar.precio;

        document.getElementById("agregar").innerText = "Actualizar producto"

    }    
});