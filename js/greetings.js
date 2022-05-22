const LoginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const LoginButton = document.querySelector("#login-form button");
const h1 = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = LoginInput.value;
  LoginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,username);
  PaintGreetings(username);
}

function PaintGreetings(username) {
  h1.classList.remove("hidden");
  h1.innerText = `Nice to meet you, ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  LoginForm.classList.remove("hidden");
  LoginForm.addEventListener("submit",onLoginSubmit);
} else {
  PaintGreetings(savedUsername);
}