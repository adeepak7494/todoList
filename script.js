let toDoItemsList = [];
let lists = localStorage.getItem("lists") ? JSON.parse(localStorage.getItem("lists")) : [] ;
let todoItem = 0;
let listIndex = 0;
let currentTaskIndex = 0;
window.onload = function(){
  if(lists.length > 0) {
    for(let i = 0; i < lists.length; i++) {
      document.getElementById(
        "lists"
      ).innerHTML += `<li id="listItem">
        <div style="display: flex;justify-content: space-between;">
        <span>
        <button class="list-item-button" style="background-color: ${lists[i].colour};" id="listitem-${i}-button">
       </button>
       <label>${lists[i].listName}</label>
        </span>
        <span>
        <button class="list-counter-button" style="background-color: #FAFAFA;" id="listcounter-${i}-button">0
       </button>
        </span>
        </div>
       
        </li>`;
        listIndex++;
    }
  }
  
};


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
  if(sideBar.style.width == "15%" || sideBar.style.width == "") {
    sideBar.style.width = "3%";
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
    sideBar.style.width = "15%"
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

function changeDescription() {
  const taskDescription =  document.getElementById("taskDescription").value;
   toDoItemsList[Number(currentTaskIndex)].description = taskDescription;
}

function expandTask(clickedId) {
  console.log(clickedId);
  const index = clickedId.split("-")[1];
  currentTaskIndex = index;
  document.getElementById("taskTitleField").value = toDoItemsList[Number(index)].title;
  document.getElementById("taskDescription").value = toDoItemsList[Number(currentTaskIndex)].description;
  const taskDetailBlock  = document.getElementById("taskDetailBlock");
  taskDetailBlock.style.width = "40%";
  taskDetailBlock.style.height = "100%"
  taskDetailBlock.classList.remove("show-none");
  taskDetailBlock.classList.add("showMore");
  document.getElementById("addToDoBlock").style.width = "60%";
  document.getElementById("sidebar").style.width = "25%";
  for(let i = 0; i < lists.length ; i++) {
    var daySelect = document.getElementById("listOptions");
    var myOption = document.createElement("option");
    myOption.text = lists[i].listName;
    myOption.value = i;
    daySelect.add(myOption);
  }
}


function closeTaskDetail(clickedId) {
  const taskDetailBlock  = document.getElementById("taskDetailBlock");
  taskDetailBlock.style.width = "0";
  taskDetailBlock.style.height = "0";
  taskDetailBlock.classList.remove("showMore");
  taskDetailBlock.classList.add("show-none");
  document.getElementById("addToDoBlock").style.width = "80%";
  document.getElementById("sidebar").style.width = "20%";
  currentTaskIndex = 0;
}

function addListItem(event) {
  if(event.key === "Enter") {
    const item = document.getElementById("newListField");
    const colour =  document.getElementById("colorpicker").value;
     if(item.value !== "") {
      lists.push({listName : item.value, colour : colour});
      localStorage.setItem("lists", JSON.stringify(lists));
      document.getElementById(
        "lists"
      ).innerHTML += `<li id="listItem">
        <div style="display: flex;justify-content: space-between;">
        <span>
        <button class="list-item-button" style="background-color: ${colour};" id="listitem-${listIndex}-button">
       </button>
       <label>${lists[listIndex].listName}</label>
        </span>
        <span>
        <button class="list-counter-button" style="background-color: #FAFAFA;" id="listcounter-${listIndex}-button">0
       </button>
        </span>
        </div>
       
        </li>`;
        item.value = "";
        listIndex += 1;
        document.querySelector("#listFieldInput").classList.remove("showMore");
        document.querySelector("#listFieldInput").classList.add("show-none");
    }
  }
}

function addNewListItem() {
  document.querySelector("#listFieldInput").classList.remove("show-none");
  document.querySelector("#listFieldInput").classList.add("showMore");
}


