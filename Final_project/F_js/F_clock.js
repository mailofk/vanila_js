const divTime = document.querySelector(".time");

function addTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    divTime.innerText = `${hours}:${minutes}:${seconds}`;
}

addTime();
setInterval(addTime,1000);