/* eslint-disable no-plusplus */
const BOX_CONTAINER = document.querySelector(".sketch-box__container");
const CLEAR_BTN = document.querySelector(".clear-btn");
const APPLY_BTN = document.querySelector(".apply-btn");

const slider = document.getElementById("myRange");
const output = document.querySelector("p");

const gridSize = slider.value * slider.value;

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createGrid() {
  BOX_CONTAINER.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
  BOX_CONTAINER.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
  for (let i = 0; i < gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("one-box");
    square.style.border = "1px solid black";
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "grey";
    });
    BOX_CONTAINER.appendChild(square);
  }
}

slider.oninput = () => {
  output.innerHTML = `${slider.value} x ${slider.value}`;
};

function clearDeck() {
  removeAllChildNodes(BOX_CONTAINER);
  createGrid();
}

APPLY_BTN.addEventListener("click", () => {
  removeAllChildNodes(BOX_CONTAINER);
  createGrid();
});
CLEAR_BTN.addEventListener("click", clearDeck);

createGrid();
