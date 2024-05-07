let gridNum = 8;
let container = document.getElementById("container");
for (let row = 1; row <= gridNum; row++) {
  let newRow = document.createElement("div");
  newRow.classList.add("newRow");
  container.appendChild(newRow);
  for (let col = 1; col <= gridNum; col++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDiv");
    newRow.appendChild(newDiv);
  }
}
