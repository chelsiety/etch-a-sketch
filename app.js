
const grid = document.querySelector(".grid-container");
const gridSlider = document.querySelector("#grid-size-slider");
const gridSizeDisplayLabel = document.querySelector('label[for="grid-size"]');
const colorModeButtons = document.querySelectorAll(".color-mode-button");

let defaultColorMode = "custom-color"; // default


createGrid(16, 16);



// EVENT LISTENERS
gridSlider.addEventListener('input', displayGridSize)
gridSlider.addEventListener('change', createGrid)

// Mouse state tracker
document.body.addEventListener('mousedown', () => {
    mouseDown = true;
})
document.body.addEventListener('mouseup', ()=> {
    mouseDown = false;
})


colorModeButtons.forEach(colorButton => colorButton.addEventListener('click', getColorMode));




// FUNCTIONS

function createGrid(rows, cols) {
    rows = gridSlider.value;
    cols = gridSlider.value;

    grid.style.setProperty('--grid-rowNum', rows);
    grid.style.setProperty('--grid-colNum', cols);

    // Insert Child Divs for grid
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.appendChild(cell);


        cell.addEventListener('mouseover', (e) => e.target.style.backgroundColor = "black" )
    };





};

function displayGridSize() {
    gridSizeDisplayLabel.textContent = `Grid size: ${gridSlider.value} x ${gridSlider.value}`
}


function getColorMode(buttonClickedEvent){

    const colorMode = buttonClickedEvent.target.value;

    // Draw when mouse is held down (mousedown)
    if (colorMode === 'custom-color'){
        console.log("get custom color function")
    }
    else if (colorMode === 'random-color'){
        console.log("get random-color function")
    }
    else if (colorMode === 'rainbow'){
        console.log("get rainbow function")
    }
    else if (colorMode === 'grayscale'){
        console.log("get grayscale function")
    }
    console.log(colorMode);
}

