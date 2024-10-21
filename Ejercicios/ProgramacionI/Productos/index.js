import Producto from "./Classes/Productos.js";

function obtenerValoresFormulario() {
    return {
        codigo: document.getElementById("codigo").value,
        nombre: document.getElementById("nombre").value,
        descripcion: document.getElementById("descripcion").value,
        precio: document.getElementById("precio").value,
        imgProduct: document.getElementById("imagen").value
    };
}

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
                <td>${producto.imgProduct}</td>
        </tr>

        `;
    });

}

updateTablaProducto();

document.getElementById("agregar").addEventListener("click", () => {
    let { codigo, nombre, descripcion, precio, imgProduct } = obtenerValoresFormulario();

    if (document.getElementById("agregar").innerText === "Agregar producto") {
        Producto.crear(codigo, nombre, descripcion, precio, imgProduct);
    } else {
        Producto.editar(codigo, nombre, descripcion, precio, imgProduct);
        document.getElementById("agregar").innerText = "Agregar producto";
    }
    document.getElementById("formProducto").reset();
    updateTablaProducto();
});

document.getElementById("tablaProducto").addEventListener("click", (event) => {
    if (event.target.className === "eliminar") {
        let codigoProducto = event.target.dataset.codigo;
        console.log("Producto a eliminar: ", codigoProducto)
        Producto.eliminar(codigoProducto)
        updateTablaProducto();
    }
    if (event.target.className === "editar") {
        let button = event.target;
        let codigoProducto = button.dataset.codigo;
        let productoAEditar = Producto.obtenerProducto(codigoProducto);
        document.getElementById("codigo").value = productoAEditar.codigo;
        document.getElementById("nombre").value = productoAEditar.nombre;
        document.getElementById("descripcion").value = productoAEditar.descripcion;
        document.getElementById("precio").value = productoAEditar.precio;
        document.getElementById("imagen").value = productoAEditar.imgProduct;
        document.getElementById("agregar").innerText = "Editar producto";
    }
});