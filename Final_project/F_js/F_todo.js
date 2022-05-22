const toDoList = document.querySelector(".toDo-list");
const toDoForm = document.querySelector(".toDo__form");
const toDoInput = toDoForm.querySelector("input");


let listCnt = 0;
let toDoArray = [];

function saveToStorage() {
    localStorage.setItem("list",JSON.stringify(toDoArray));
}
function deleteList(event) {
    const delList = event.target.parentElement;
    toDoArray = toDoArray.filter(list => list.id !== parseInt(delList.id));
    saveToStorage(toDoArray);
    delList.remove();
    listCnt-=1;
    if (listCnt<12) {
        toDoInput.classList.remove("hidden");
    }
}

function makeList(list) {
    const li = document.createElement("li");
    li.id=list.id;
    const span = document.createElement("span");
    span.innerText = list.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteList);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    listCnt+=1;

    if (listCnt>=12) {
        toDoInput.classList.add("hidden");
    } 
}

function addList(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    }
    toDoArray.push(newToDoObj);
    makeList(newToDoObj);
    saveToStorage();
}

toDoForm.addEventListener("submit",addList);
const savedToDo = localStorage.getItem("list");

if (savedToDo !==null) {
    const parsedToDo = JSON.parse(savedToDo);
    toDoArray = parsedToDo;
    parsedToDo.forEach(makeList);
}
