const nameForm = document.querySelector(".nameForm");
const greeting = document.querySelector("h1");
const nameInput = nameForm.querySelector("input");

const HIDDEN_KEY = "hidden";
const STORAGE_NAME = "name";

function paintGreeting(name) {
    greeting.classList.remove(HIDDEN_KEY);
    greeting.innerText = `${name}'s Homepage`;
}

function addName(event) {
    event.preventDefault();
    const nameValue = nameInput.value;
    localStorage.setItem(STORAGE_NAME,nameValue);
    paintGreeting(nameValue);
    nameForm.classList.add(HIDDEN_KEY);
}


const savedName = localStorage.getItem(STORAGE_NAME);
if (savedName === null) {
    nameForm.classList.remove(HIDDEN_KEY);
    nameForm.addEventListener("submit",addName);

} else {
    paintGreeting(savedName);
}