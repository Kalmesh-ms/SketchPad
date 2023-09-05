const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = 'black';

let currGridSize = DEFAULT_GRID_SIZE;
let currColor = DEFAULT_COLOR;

let xGrid =[];
let yGrid =[];

const grid = document.querySelector('#grid');
const blackInk = document.querySelector('#black');
const eraser = document.querySelector('#eraser');

blackInk.onclick = () => (setColor('black'));
eraser.onclick = () => (setColor('white'));
console.log(currColor);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown =true);
document.body.onmouseup = () => (mouseDown =false);


function setGridSize (currGridSize){
    for ( let i=0; i<currGridSize ; i++){
        let xDiv = document.createElement('div');
        xDiv.classList.add('rows')
        xGrid[i]=xDiv;
        grid.appendChild(xGrid[i]);
        for ( let j=0 ; j<currGridSize ; j++){
            let newDiv = document.createElement('div');
            newDiv.addEventListener('mouseover', changeColor);
            newDiv.addEventListener('mousedown', changeColor);
            newDiv.classList.add('px');
            yGrid[j] = newDiv;
            xGrid[i].appendChild(yGrid[j]);
        }
}
}

function setColor(newColor){
    currColor = newColor;
}



function changeColor (e){
    if(e.type === 'mouseover' && !mouseDown)return;
    e.target.classList.add('colored');
    if (currColor === 'black'){
        e.target.style.backgroundColor = 'black';
    }
    if (currColor === 'white'){
        e.target.style.backgroundColor ='white';
    }
}











setGridSize(DEFAULT_GRID_SIZE);

