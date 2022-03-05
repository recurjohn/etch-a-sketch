//To make a 16x16 grid of divs, you probably need a div to hold all 16

var container = document.createElement("div");
container.setAttribute('id', 'container');
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16,100px)';
//container.style.padding = '10px';

document.body.appendChild(container);

var box = document.createElement("div");
box.classList.add('box');


var test = document.createElement("div");
test.classList.add('box');

function createRow() { //adds 16 divs
    for (let i=0; i < 16; i++) {
        let temp = document.createElement("div");
        temp.classList.add('box');
        document.getElementById("container").appendChild(temp);
        console.log("This is iteration " + i);
    }
}

for (i=0; i<16; i++) { //lol
    createRow(); 
}


//document.getElementById("container").appendChild(box);
//document.getElementById("container").appendChild(test);
