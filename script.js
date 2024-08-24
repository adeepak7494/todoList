let toDoItemsList = [];
let todoItem = 0;

function addTodo() {
  let toDoText = document.querySelector("#toDoField");
  if(toDoText.value == "") {
    toDoText.target.checkValidity();
  } else {
    toDoItemsList.push(toDoText.value);
    console.log(toDoItemsList[todoItem]);
    document.getElementById(
      "todoList"
    ).innerHTML += `<li id="toDoItem"><input type="checkbox" id="expand-${todoItem}-button">${toDoItemsList[todoItem]}<button class="expand-task-button" id="expand-${todoItem}-button" onclick="ex[andTask(this.id)">
      <i class="fa-solid fa-chevron-right"></i></button>
      </li>
      <hr class="taskDivider">`;
    toDoText.value = "";
    todoItem += 1;
  }
  
}

