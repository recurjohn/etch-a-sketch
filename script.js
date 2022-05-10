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

function createRow() { //adds 16 divs
    for (let i=0; i < 16; i++) {
        let temp = document.createElement("div");
        temp.classList.add('box');
        document.getElementById("container").appendChild(temp);
        console.log("This is iteration " + i);
    }
}

for (i=0; i<16; i++) { //16 rows vertical
    createRow(); 
}


//document.getElementById("container").appendChild(box);
//document.getElementById("container").appendChild(test);