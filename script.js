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
  console.log(clickedId);
  const taskDetail = document.getElementById(clickedId).parentNode;
  console.log(taskDetail.children, taskDetail.childNodes);
  document.getElementById("taskTitleField").nodeValue = taskDetail.childNodes[1].textContent
  const taskDetailBlock  = document.getElementById("taskDetailBlock");
  taskDetailBlock.style.width = "40%";
  taskDetailBlock.style.height = "100%"
  taskDetailBlock.classList.remove("show-none");
  taskDetailBlock.classList.add("showMore");
  document.getElementById("addToDoBlock").style.width = "60%";
  document.getElementById("sidebar").style.width = "25%";
}



function closeTaskDetail(clickedId) {
  const taskDetailBlock  = document.getElementById("taskDetailBlock");
  taskDetailBlock.style.width = "0";
  taskDetailBlock.style.height = "0";
  taskDetailBlock.classList.remove("showMore");
  taskDetailBlock.classList.add("show-none");
  document.getElementById("addToDoBlock").style.width = "80%";
  document.getElementById("sidebar").style.width = "20%";
}




