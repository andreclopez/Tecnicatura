import Tarea from "./Class/Tarea.js"

function updateTablaTareas() {
    let tablaTareas = document.getElementById("tablaTarea");
    tablaTareas.innerHTML = "";

    // creo un foreach para iterar por los elementos contenidos en Articulo.items
    Tarea.tareas.forEach(tareas => {
        tablaTareas.innerHTML += `
            <tr id="${tareas.codigo}" class="${tareas.hecha ? 'hecha' : ''}">
                <td>${tareas.codigo}</td>
                <td>${tareas.titulo}</td>
                <td>${tareas.detalle}</td>
                <td>${tareas.dia}</td>
                <td>${tareas.horario}</td>
                <td>
                    <button data-id="${tareas.codigo}" class="eliminar">Eliminar</button>
                    <button data-id="${tareas.codigo}" class="${tareas.hecha ? 'marcar-pendiente' : 'marcar-hecho'}"> Tarea ${tareas.hecha ? 'Pendiente' : 'Realizada'}</button>
                </td>
            </tr>
        `;
    });
}

updateTablaTareas();

// Interacción con el botón agregar
document.getElementById("agregar").addEventListener("click", () => {
    let codigo = document.getElementById("codigo").value;
    let titulo = document.getElementById("titulo").value;
    let detalle = document.getElementById("detalle").value;
    let dia = document.getElementById("dia").value;
    let horario = document.getElementById("horario").value;

    Tarea.crear(codigo, titulo, detalle, dia, horario);
    document.getElementById("formTareas").reset();
    updateTablaTareas();
});

// Interacción con el botón eliminar
document.getElementById("tablaTarea").addEventListener("click", (event) => {
    if (event.target.className === "eliminar") {
        let codigoTarea = event.target.dataset.id;
        Tarea.eliminar(codigoTarea);
        updateTablaTareas();
    }
});

// Interacción con el botón marcar como hecho
document.getElementById("tablaTarea").addEventListener("click", (event) => {
    if (event.target.className.includes("marcar")) {
        let codigoTarea = event.target.dataset.id;
        Tarea.marcarComoHecho(codigoTarea);
        updateTablaTareas();
    }
});