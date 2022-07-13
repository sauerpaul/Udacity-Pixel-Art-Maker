// Select color input
const color = document.querySelector('#colorPicker');
// Select size input
const form = document.querySelector('#sizePicker');
const submit = document.querySelector('#submit');
// const erase = document.querySelector('#erase');
const table = document.querySelector('#pixelCanvas');

let gridRows = document.getElementById('gridHeight');
let gridCells = document.getElementById('gridWidth');
// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', function(e) {
    table.innerHTML = " ";
    e.preventDefault();
    // call the function makeGrid()
    makeGrid();
})
  
table.addEventListener('mouseover', function(e) {
  // .tagName allows you to check if the element is an input
  if (e.target.tagName.toLowerCase() === 'td') {
  e.target.style.backgroundColor = color.value;
  }
});

// Create Grid Function
function makeGrid(e) {
  for (let i = 0; i < gridRows.value; i++) {
    const row = table.insertRow(0);
  
    for (let j = 0; j < gridCells.value; j++) {
    row.insertCell(0);
    }
  }
}