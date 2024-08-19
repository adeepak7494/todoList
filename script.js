let toDoItems = [];
let todoItem = 0;

function addTodo() {
    const toDoText = document.querySelector("#toDoField").value;
    toDoItems.push(toDoText);
    console.log(toDoItems[todoItem])
    let toDoList = document.querySelector("#todoList");
    toDoList.innerHTML+= `<li>${toDoItems[todoItem]}<button class="delete-button" id="delete-${todoItem}" onclick="deleteTodo(this.id)">
    <i class="fa fa-trash" aria-hidden="true"></i></button>
    <button class="edit-botton" id="edit-${todoItem}" onclick="editTodo(this.id)">
    <i class="fa fa-pencil" aria-hidden="true"></i></button>
    <button class="done-botton" id="done-${todoItem}" onclick="doneTodo(this.id)">
    <i class="fa fa-check" aria-hidden="true"></i>
    </button>
    </li>`;
    todoItem += 1;

}