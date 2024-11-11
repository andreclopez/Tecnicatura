import Producto from "../../Classes/Producto.js";

function obtenerValoresFormulario() {
    return {
        codigo: document.getElementById("codigo").value,
        nombre: document.getElementById("nombre").value,
        descripcion: document.getElementById("descripcion").value,
        precio: document.getElementById("precio").value,
        imgProduct: document.getElementById("imagen").value
    };
}

function updateTablaProducto() {
    let tablaProducto = document.getElementById("tablaProducto");
    tablaProducto.innerHTML = "";

    Producto.todosLosItems.forEach(producto => {
        tablaProducto.innerHTML += `
        <tr id="${producto.codigo}" class="border-collapse border border-slate-400">
            <td class="border border-slate-300">${producto.codigo}</td>
            <td class="border border-slate-300">${producto.nombre}</td>
            <td class="border border-slate-300">${producto.descripcion}</td>
            <td class="border border-slate-300">${producto.precio}</td>
            <td class="border border-slate-300 w-5">
               <img src="${producto.imgProduct}" alt="${producto.nombre}"</td>
            <td class="border border-slate-300">
                <button data-codigo="${producto.codigo}" class="editar focus:outline-none text-white bg-violet-500 hover:bg-violet-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1 mb-1 dark:bg-indigo-500 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Editar</button>
                <button data-codigo="${producto.codigo}" class="eliminar focus:outline-none text-white bg-violet-500 hover:bg-violet-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1 mb-1 dark:bg-indigo-500 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Eliminar</button>
            </td>
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
    if (event.target.classList.contains("eliminar")) {
        let codigoProducto = event.target.dataset.codigo;
        console.log("Producto a eliminar: ", codigoProducto);
        Producto.eliminar(codigoProducto);
        updateTablaProducto();
    }
    if (event.target.classList.contains("editar")) {
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
