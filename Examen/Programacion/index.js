import Producto from "./classes/I_Articulo.js";

function updateProducto() {
    let tablaProducto = document.querySelector(".tablaProducto");
    tablaProducto.innerHTML = ""

    const tablaProducto1 = document.querySelector(".tablaProducto");
Producto.items.forEach(product=> {
    tablaProducto1.innerHTML += `
    <tr id="${product.id}">
    <td>${product.id}</td>
    <td>${product.titulo}</td>
    <td>${product.año}</td>
    <td> 
    <button data-id="${product.id}" class="eliminar">Eliminar</button>
    <button data-id="${product.id}" class="editar">Editar</button>
    </td>
    </tr>

    `;
  });
}

updateProducto();

document.getElementById("agregar").addEventListener("click",() => {
    let id = document.getElementById("id").value;
    let titulo = document.getElementById("titulo").value;
    let año = document.getElementById("año").value;
};

