const images = ["1.png", "2.png", "3.png"];
const body = document.querySelector("body");

const Randomimage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

function createclass() {
  bgImage.classList.add("bg");
}

bgImage.src = `img/${Randomimage}`;

document.body.appendChild(bgImage, createclass());
