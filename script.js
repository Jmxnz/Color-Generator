// all colors i need 
const colors = [
  "pink",
  "orange",
  "yellow",
  "red",
  "navy",
  "skyblue",
  "yellowgreen",
  "blueviolet",
  "salmon",
  "blue",
  "violet",
  "beige",
  "tomato",
  "orangered",
  "green",
  "teal",
];

const name = document.querySelector("#colorName");
const color = document.querySelector("#colorButton");

color.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  name.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}