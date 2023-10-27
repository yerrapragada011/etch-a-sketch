let container = document.querySelector('.container')
let newGrid = document.getElementById('newGrid')

newGrid.addEventListener('click', function () {
  clearGrid()
  let userInput = +prompt('Please enter a number for a new grid: ')
  makeGrid(userInput)
})

function makeGrid(value) {
  if (value > 0 || value < 99 || value == '') {
    container.innerHTML = ''
    for (let i = 0; i < value; i++) {
      let row = document.createElement('div')
      row.classList.add('row')
      container.appendChild(row)
      for (let k = 0; k < value; k++) {
        let column = document.createElement('div')
        column.classList.add('column')
        row.appendChild(column)
      }
    }
  } else {
    for (let i = 0; i < 16; i++) {
      let row = document.createElement('div')
      row.classList.add('row')
      container.appendChild(row)
      for (let k = 0; k < 16; k++) {
        let column = document.createElement('div')
        column.classList.add('column')
        row.appendChild(column)
      }
    }
  }
  draw()
}

function draw() {
  let columns = document.getElementsByClassName('column')
  for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener('mouseover', changeColor)
  }
}

function changeColor() {
  this.style.backgroundColor = 'black'
}

function clearGrid() {
  let columns = document.getElementsByClassName('column')
  for (let i = 0; i < columns.length; i++) {
    columns[i].style.backgroundColor = ''
  }
}

makeGrid()
draw()
