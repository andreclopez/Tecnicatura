import Articulo from "./Classes/I_Articulo.js";

// esta función actualiza la tabla de artículos
function updateTablaArticulo() {
    let tablaArticulo = document.getElementById("tablaArticulo");
    tablaArticulo.innerHTML = "";

    // creo un foreach
    Articulo.items.forEach(articulo => {
        tablaArticulo.innerHTML += `
            <tr id="${articulo.id}">
                <td>${articulo.id}</td>
                <td>${articulo.titulo}</td>
                <td>${articulo.año}</td>
                <td>
                    <button data-id="${articulo.id}" class="eliminar">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

updateTablaArticulo();

// Interacción con el botón agregar
document.getElementById("agregar").addEventListener("click", () => {
    let id = document.getElementById("id").value;
    let titulo = document.getElementById("titulo").value;
    let año = document.getElementById("año").value;

    Articulo.crear(id, titulo, año);
    document.getElementById("formArticulo").reset();
    updateTablaArticulo();
});

// Interacción con el botón eliminar
document.getElementById("tablaArticulo").addEventListener("click", (event) => {
    if (event.target.className === "eliminar") {
        let idArticulo = event.target.dataset.id;
        Articulo.eliminar(idArticulo);
        updateTablaArticulo();
    }
});

