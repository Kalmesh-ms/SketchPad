const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = 'black';

let currGridSize = DEFAULT_GRID_SIZE;
let currColor = DEFAULT_COLOR;

let xGrid =[];
let yGrid =[];

const grid = document.querySelector('#grid');
const blackInkBtn = document.querySelector('#black');
const eraserBtn = document.querySelector('#eraser');
const rainbowBtn = document.querySelector('#rainbow');
const clearBtn = document.querySelector('#clear');
const GridSizBtn = document.querySelector('#changeGridSize')

blackInkBtn.onclick = () => (setColor('black'));
eraserBtn.onclick = () => (setColor('white'));
rainbowBtn.onclick = () => (setColor('rainbow'));
clearBtn.onclick = () => cleared();
GridSizBtn.onclick = () => changeGridSize();


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

function changeGridSize (){
    inputSize = parseInt(prompt('Input Size of Square Grid',"16"));
    if(!inputSize || inputSize > 100 || inputSize < 0 ){
        alert('Cancelled. Enter a number Between 1 to 100');
    }
    else{
        while(grid.firstChild){
            grid.removeChild(grid.lastChild);
        }
        setGridSize(inputSize);
    }
}

function setColor(newColor){
    currColor = newColor;
}



function changeColor (e){
    if(e.type === 'mouseover' && !mouseDown )return;
    e.target.classList.add('colored');
    if (currColor === 'black'){
        e.target.style.backgroundColor = 'black';
    }
    if (currColor === 'white'){
        e.target.style.backgroundColor ='white';
    }
    if(currColor === 'rainbow'){
        randomR = Math.floor((Math.random())*256);
        randomG = Math.floor((Math.random())*256);
        randomB = Math.floor((Math.random())*256);
        e.target.style.backgroundColor =`rgb(${randomR},${randomG},${randomB})`;
    }
}


function cleared(){
    let clearDivs = document.querySelectorAll('div > .px');
    clearDivs.forEach((clearDiv)=> clearDiv.style.backgroundColor = 'white');
}


setGridSize(DEFAULT_GRID_SIZE);

// const theme = document.querySelector('#theme');
// const toggleTheme = document.querySelector('.switchTheme')
// theme.onclick = () => (switchTheme());
// function switchTheme(){
//   toggleTheme.classList.toggle('switchTheme')
// }
