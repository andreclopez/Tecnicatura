function agregarUsuario() {
    // entrada de datos
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let edad = document.getElementById('edad').value;

    // creo fila y celdas
    let table = document.getElementById('tablaUsuario').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    // valores celda
    cell1.textContent = nombre;
    cell2.textContent = email;
    cell3.textContent = edad;

    // boton eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex - 1);
    };
    cell4.appendChild(deleteButton);

    // Limpiar los campos de entrada
    document.getElementById('formUsuario').reset();
}