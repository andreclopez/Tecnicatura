let tareas = [];

window.onload = () => {
    let form = document.getElementById('todo-form');
    form.onsubmit = (e)=>{
        e.preventDefault();
        let todo = document.getElementById('todo');
        let todoText = todo.value;
        todo.value='';
        tareas.push(todoText);
        let todoList = document.getElementById('todo-list');
        todoList.innerHTML='';
        for(let i = 0; i < tareas.length; i++) {
            todoList.innerHTML += '<li>' + tareas[i] + '</li>';
        }
    }
}