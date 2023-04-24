// script.js
document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let todoInput = document.getElementById('todo-input');
    let todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() !== '') {
        let li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${todoInput.value}</span>
            <button class="delete-btn">&times;</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
    }
});

document.getElementById('todo-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentNode.remove();
    }
});