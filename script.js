const grid = document.querySelector('.grid');

<<<<<<< HEAD
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div'); //create div
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){ //change background on hover
            event.target.style.backgroundColor = '#4B4B4B';
        })
        grid.appendChild(div);
=======
var container = document.createElement("div"); //Create container through js
container.setAttribute('id', 'container'); //Set id 
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
//container.style.flexBasis = 'auto';
container.style.width = '1000px';
//container.style.display = 'grid'; //Apply grid to div 
//container.style.gridTemplateColumns = 'repeat(16,100px)'; //Applying 16 col grid to div
//container.style.padding = '10px';

document.body.appendChild(container); //Attach to HTML body

/* This creates the box class
var box = document.createElement("div"); //Create a box element through js
box.classList.add('box'); //Set class
*/

/* This was to test using a different variable name
var test = document.createElement("div"); 
test.classList.add('box');
*/

function changeBackground(name) {
    name.style.backgroundColor = "white";
}

/* Testing a function to see that it gets called within the function
function testFunction() { 
    alert("Hello World");
}
*/

function createCol(n) { //want to make this n long
    for (let i=0; i < n; i++) {
        let temp = document.createElement("div");
        temp.classList.add('box'); 
        //temp.addEventListener("mouseover", changeBackground(temp)); //Why doesn't this work? It has the same code for the function
        temp.addEventListener("mouseover", function() { temp.style.backgroundColor = "gray"; } );
        document.getElementById("container").appendChild(temp);
        //console.log("This is iteration " + (i + 1));
>>>>>>> ff3516a168e980b180673bc655dbe069d29a6c38
    }
};

<<<<<<< HEAD
createGrid();
=======
createCol(100); // works as expected, creates 10 columns of squares.
//createCol(100); // works as expected, creates 10 columns of squares.


function createRow(n) { //doesn't work as expected, makes more columns. want it to start on a new line. how do i start it on a new line??
    for (let i=0; i<n; i++) { //16 rows vertical
        createCol(n); 
        console.log("This is row number " + (i + 1));
    }
}

//createRow(2);

//Get input from user through button
function getInput() {
    let input = prompt("Please put in the number of squares per side for the new grid.", "100");

    //add conditions for edge cases (non-numbers, anything over 100 are excluded)

    console.log(input); 
}    

//Helper function to reset etch-a-sketch
function clear() {
    document.body.removeChild(container); //Attach to HTML body
}

//Helper function to set a new grid with Grid Input 
function setNewGrid() {

}

//Load in new grid using helper functions
function replaceGrid() {
    clear();
    setNewGrid();
}


//Testing functions


//newGrid(4);
//clear();
>>>>>>> ff3516a168e980b180673bc655dbe069d29a6c38
