const images= [
    "jap1.jpg","jap2.jpg","newyork.jpg",
]
const backgroundDiv = document.querySelector(".background-image");
const random = Math.floor(Math.random()*3);
backgroundDiv.src = `img/${images[random]}`;