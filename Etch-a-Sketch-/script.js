/* eslint-disable no-plusplus */
const GRID_CONTAINER = document.querySelector(".sketch-box__container");
const CLEAR_BTN = document.querySelector(".clear-btn");
const APPLY_BTN = document.querySelector(".apply-btn");
const RANDOM_COLOR_BTN = document.getElementById("random-color-btn");

const slider = document.getElementById("myRange");
const output = document.querySelector("p");

function createGrid() {
  // clear grid
  GRID_CONTAINER.innerHTML = "";

  // create grid template based on slider option
  GRID_CONTAINER.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
  GRID_CONTAINER.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;

  const color = "grey";
  // create grid
  for (let i = 0; i < slider.value * slider.value; i++) {
    const square = document.createElement("div");
    square.classList.add("one-box");
    square.style.border = "1px solid black";
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `${color}`;
    });
    GRID_CONTAINER.appendChild(square);
  }
}

function drawRandomColor() {
  // clear grid
  GRID_CONTAINER.innerHTML = "";
  // create grid template based on slider option
  GRID_CONTAINER.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
  GRID_CONTAINER.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
  // generate random color
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // draw random color
  for (let i = 0; i < slider.value * slider.value; i++) {
    const square = document.createElement("div");
    square.classList.add("one-box");
    square.style.border = "1px solid black";
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `${color}`;
    });
    GRID_CONTAINER.appendChild(square);
  }
}

// show slider values
slider.oninput = () => {
  output.innerHTML = `${slider.value} x ${slider.value}`;
};

APPLY_BTN.addEventListener("click", createGrid);
CLEAR_BTN.addEventListener("click", createGrid);
RANDOM_COLOR_BTN.addEventListener("click", drawRandomColor);

// initialize
createGrid();
