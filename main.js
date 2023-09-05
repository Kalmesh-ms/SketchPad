const DEFAULT_GRID_SIZE = 16;

let currGridSize = DEFAULT_GRID_SIZE;

let xGrid =[];
let yGrid =[];

const grid = document.querySelector('#grid');


function setGridSize (currGridSize){
    for ( let i=0; i<currGridSize ; i++){
        let xDiv = document.createElement('div');
        xDiv.classList.add('rows')
        xGrid[i]=xDiv;
        // console.log(xGrid[i])
        grid.appendChild(xGrid[i]);
        for ( let j=0 ; j<currGridSize ; j++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('px');
            yGrid[j] = newDiv;
            xGrid[i].appendChild(yGrid[j]);
        }
}
}













setGridSize(7);

