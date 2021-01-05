const container = document.querySelector('#container');
function createGrid() {
for (i=0; i<400; i++) {
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);
}};
// call the function
createGrid();

const squares = document.querySelectorAll("div");
squares.forEach((square) => {
  square.addEventListener('mouseover', (e) => {
    e.target.classList.replace("content", "box");
  });
});

// reset button
const clear = document.querySelector("button");
clear.addEventListener('click', () => {
  const boxes = document.querySelectorAll("div");
  boxes.forEach((box) => {
    box.classList.replace("box", "content");
  });
});
