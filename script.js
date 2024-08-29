let toDoItemsList = [];
let todoItem = 0;

function addTodo() {
  let toDoText = document.querySelector("#toDoField");
  if(toDoText.value == "") {
    toDoText.target.checkValidity();
  } else {
    toDoItemsList.push({title : toDoText.value, description : "", listType : "", tags: "" });
    document.getElementById(
      "todoList"
    ).innerHTML += `<li id="toDoItem"><input type="checkbox" id="expand-${todoItem}-button">${toDoItemsList[todoItem].title}<button class="expand-task-button" id="expand-${todoItem}-button" onclick="expandTask(this.id)">
      <i class="fa-solid fa-chevron-right"></i></button>
      </li>
      <hr class="taskDivider">`;
    toDoText.value = "";
    todoItem += 1;
  }
  
}

function openSideNav() {
  let sideBar = document.querySelector('#sidebar');
  if(sideBar.style.width == "20%" || sideBar.style.width == "") {
    sideBar.style.width = "5%";
    document.getElementById('appTitle').style.display = "none";
    let Nodelist = sideBar.children;
    for(let i =1; i< Nodelist.length; i++) {
        for(let j = 0; j< Nodelist[i]?.children.length; j++) {
          if(Nodelist[i]) {
            Nodelist[i].style.display = "none";          
          }
        }     
    }
    
  } else {
    sideBar.style.width = "20%"
    document.getElementById('appTitle').style.display = "";
    let Nodelist = sideBar.children;
    for(let i =1; i< Nodelist.length; i++) {
      for(let j = 0; j< Nodelist[i]?.children.length; j++) {
        if(Nodelist[i]) {
          Nodelist[i].style.display = "";          
        }
      }     
    }
  }
}

function expandTask(clickedId) {
console.log(clickedId)
document.querySelector("#taskDetailBlock").classlist.toggle('is-show');
}

