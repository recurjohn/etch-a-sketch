const grid = document.querySelector('.grid');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div'); //create div
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){ //change background on hover
            event.target.style.backgroundColor = '#4B4B4B';
        })
        grid.appendChild(div);
    }
};

let input; //set up variable to be used within functions

function getInput() { //helper function for setupNewGrid
    input = prompt("Please put in the number of squares per side for the new grid.", "100");
}    

function removeAllChildNodes(parent) { //helper function for newGrid
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function newGrid(n) { //function to replace current grid and replace based on input
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${n}, 2fr); grid-template-rows: repeat(${n}, 2fr);`);
    for (let i = 0; i < n*n; i++) {
        const div = document.createElement('div'); //create div
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){ //change background on hover
            event.target.style.backgroundColor = '#4B4B4B';
        })
        grid.appendChild(div);
    }
};

function setupNewGrid() { //function that is called on button press 
    getInput();
    newGrid(input);
};


createGrid();
