//Set main container to hold grid
var container = document.createElement("div"); 
container.setAttribute('id', 'container'); 
container.style.display = 'flex';
container.style.maxWidth = '1000px';

document.body.appendChild(container); //Attach to HTML body

//Function to create columns
function createCol(n) { 
    //Create subcontainer for boxes to fill in
    var subcontainer = document.createElement("div"); 
    subcontainer.setAttribute('id', 'subcontainer'); 
    subcontainer.style.display = 'flex';
    subcontainer.style.maxWidth = '1000px';
    document.getElementById("container").appendChild(subcontainer);

    for (let i=0; i < n; i++) {
        //Set up boxes by creating divs 
        let temp = document.createElement("div");
        temp.classList.add('box'); 
        //Set up mousover interaction 
        temp.addEventListener("mouseover", function() { temp.style.backgroundColor = "gray"; } );
        //Add boxes to subcontainer
        document.getElementById("subcontainer").appendChild(temp);
    }
    
}

createCol(20);


function createRow(n) {
}


//Function to get input from user
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
