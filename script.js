//To make a 16x16 grid of divs, you probably need a div to hold all 16

var container = document.createElement("div");
container.setAttribute('id', 'container');
container.style.display = 'grid';
container.style.gridTemplateColumns = 'auto auto auto';
container.style.padding = '10px';

document.body.appendChild(container);

var box = document.createElement("div");
box.classList.add('box');
box.style.backgroundColor = 'black';
box.style.border = '1px solid rgba(0,0,0,0)'; 
box.style.padding = '40px';

document.getElementById("container").appendChild(box);