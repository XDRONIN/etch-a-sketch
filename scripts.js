let gridNum = 8;
let mode = "pen";
let container = document.getElementById("container");
createGrid(gridNum);
function createGrid(gridNum) {
  for (let row = 1; row <= gridNum; row++) {
    let newRow = document.createElement("div");
    newRow.classList.add("newRow");
    container.appendChild(newRow);
    for (let col = 1; col <= gridNum; col++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("newDiv");
      newRow.appendChild(newDiv);
      newDiv.addEventListener("mouseover", () => {
        if (mode == "pen") {
          newDiv.style.backgroundColor = "black";
        } else if (mode == "colour") {
          let randomColor = Math.floor(Math.random() * 16777215).toString(16);

          newDiv.style.backgroundColor = `#${randomColor}`;
        } else if (mode == "eraser") {
          newDiv.style.backgroundColor = "";
        }
      });
    }
  }
}
let gridButt = document.getElementById("gridButt");
gridButt.addEventListener("click", () => {
  container.innerHTML = "";
  gridNum = prompt("Enter the number of grids you want between 1 and 100");
  createGrid(gridNum);
});

const pen = document.getElementById("pen");
const colour = document.getElementById("colour");
const eraser = document.getElementById("eraser");
pen.addEventListener("click", () => {
  mode = "pen";
});
colour.addEventListener("click", () => {
  mode = "colour";
});
eraser.addEventListener("click", () => {
  mode = "eraser";
});
