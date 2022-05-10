//To make a 16x16 grid of divs, you probably need a div to hold all 16

var container = document.createElement("div"); //Create container through js
container.setAttribute('id', 'container'); //Set id 
container.style.display = 'grid'; //Apply grid to div 
container.style.gridTemplateColumns = 'repeat(16,100px)'; //Applying 16 col grid to div
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

function createRow() { //adds 16 divs
    for (let i=0; i < 16; i++) {
        let temp = document.createElement("div");
        temp.classList.add('box');
        //temp.addEventListener("mouseover", changeBackground(temp)); //Why doesn't this work? It has the same code for the function
        temp.addEventListener("mouseover", function() { temp.style.backgroundColor = "gray"; } );
        document.getElementById("container").appendChild(temp);
        //console.log("This is iteration " + (i + 1));
    }
}

for (i=0; i<16; i++) { //16 rows vertical
    createRow(); 
    console.log("This is row number " + (i + 1));
}

//Get input from user through button
function getInput() {
    let input = prompt("Please put in the number of squares per side for the new grid.", "100");

    //add conditions for edge cases (non-numbers, anything over 100 are excluded)

    console.log(input); 
}    

//Helper function to reset etch-a-sketch
function clear() {
    
}

//Helper function to set a new grid with Grid Input 
function setNewGrid() {

}

//Load in new grid using helper functions
function replaceGrid() {
    clear();
    setNewGrid();
}