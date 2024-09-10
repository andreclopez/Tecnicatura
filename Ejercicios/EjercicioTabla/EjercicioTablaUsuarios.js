
    function addUser() {
        // Obtener los valores de los campos de entrada
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const edad = document.getElementById('edad').value;

        // Crear una nueva fila y celdas
        const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        // Asignar los valores a las celdas
        cell1.textContent = nombre;
        cell2.textContent = email;
        cell3.textContent = edad;

        // Crear el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() {
            table.deleteRow(newRow.rowIndex - 1);
        };
        cell4.appendChild(deleteButton);

        // Limpiar los campos de entrada
        document.getElementById('userForm').reset();
    }