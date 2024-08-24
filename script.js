let toDoItemsList = [];
let todoItem = 0;

function addTodo() {
  let toDoText = document.getElementById("toDoField").value;
  toDoItemsList.push(toDoText);
  console.log(toDoItemsList[todoItem]);
  document.getElementById(
    "todoUl"
  ).innerHTML = `<li>${toDoItemsList[todoItem]}<button class="delete-button" id="delete-${todoItem}" onclick="deleteTodo(this.id)">
    <i class="fa fa-trash" aria-hidden="true"></i></button>
    <button class="edit-button" id="edit-${todoItem}" onclick="editTodo(this.id)">
    <i class="fa fa-pencil" aria-hidden="true"></i></button>
    <button class="done-button" id="done-${todoItem}" onclick="doneTodo(this.id)">
    <i class="fa fa-check" aria-hidden="true"></i>
    </button>
    </li>`;
  document.getElementById("toDoField").value = "";
  todoItem += 1;
}

