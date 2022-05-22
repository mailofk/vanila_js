const toDoform = document.querySelector(".toDo");
const toDoinput = toDoform.querySelector("input");
const ul = document.querySelector(".toDo-list");

let toDoarr=[];

function deletetoDo(event) {
    const li = event.target.parentElement;
    toDoarr = toDoarr.filter(item => item.id !== parseInt(li.id));
    savetoDo();
    li.remove();
}

function savetoDo() {
    localStorage.setItem("toDo",JSON.stringify(toDoarr));
}

function addtoDo(newtoDo) {
    const li = document.createElement("li");
    li.id=newtoDo.id;
    const span = document.createElement("span");
    span.innerText = newtoDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deletetoDo);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
}

function handleAddtoDo(event) {
    event.preventDefault();
    const newtoDo = toDoinput.value;
    toDoinput.value="";
    const newtoDoObj = {
        text:newtoDo,
        id:Date.now(),
    }
    toDoarr.push(newtoDoObj);
    addtoDo(newtoDoObj);
    savetoDo();
}

toDoform.addEventListener("submit",handleAddtoDo);
const saved = localStorage.getItem("toDo");

if (saved !== null) {
    const parsedtoDo = JSON.parse(saved);
    toDoarr = parsedtoDo;
    parsedtoDo.forEach(addtoDo);
}

