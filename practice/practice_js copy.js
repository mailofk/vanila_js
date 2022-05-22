const body = document.body;
const h1 = body.querySelector("h1");
const button = body.querySelector("button");
const form = body.querySelector("form");

function login(event) {
    event.preventDefault();
    const name = body.querySelector("input").value;
    localStorage.setItem('myName',name);
    form.classList.add("hidden");
    addGreetings(name);
}
function addGreetings(name) {
    h1.classList.remove("hidden");
    h1.innerText = `Nice to meet you, ${name}`;
}

const storageName = localStorage.getItem('myName');
if (storageName === null) {
    form.classList.remove("hidden");
    form.addEventListener("submit",login);
} else {
    addGreetings(storageName);
}

const clock=document.querySelector(".clock");
function addTime() {
    const date=new Date();
    const hour = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${hour} : ${minutes} : ${seconds}`;
}
addTime();
setInterval(addTime,1000);

const images = [
    "jap1.jpg","jap2.jpg","newyork.jpg"
  ];

  const addImage = document.createElement("img");
  const randomImg = images[Math.floor(Math.random()*images.length)];
console.log(randomImg);
addImage.src=`vanila_js/img/${randomImg}`;
document.body.appendChild(addImage);