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

createGrid();
