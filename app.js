
const grid = document.querySelector(".grid-container");
const gridSlider = document.querySelector("#grid-size-slider");
const gridSizeDisplayLabel = document.querySelector('label[for="grid-size"]');
const colorModeButtons = document.querySelectorAll(".color-mode-button");

const customColorPicker = document.querySelector("#custom-color-picker");
const customColorButton = document.querySelector('#custom-color-button')
const clearButton = document.querySelector('#clear-button')
// let defaultColorMode = "custom-color"; // default






// EVENT LISTENERS

// Change grid size
gridSlider.addEventListener('input', displayGridSize)
gridSlider.addEventListener('change', createGrid)


// Mouse state tracker
document.body.addEventListener('mousedown', () => {
    mouseDown = true;
})
document.body.addEventListener('mouseup', ()=> {
    mouseDown = false;
})

// Loop through the buttons and add the active class to the current/clicked button
colorModeButtons.forEach(colorButton => colorButton.addEventListener('click', function() {
    document.querySelector('.active').classList.remove('active');
    console.log(colorButton.dataset.name);
    colorButton.classList.add('active');
}));


// Clear grid 
    clearButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('.grid-cell');
   
        cells.forEach(cell => {
            cell.style.backgroundColor = null;
        }); 
});





// FUNCTIONS

setUpDefaultSettings()

function setUpDefaultSettings() {

    // Set up grid
    let rows = gridSlider.value;
    let cols = gridSlider.value;
    createGrid(rows, cols);

    customColorButton.classList.add('active')

}

function createGrid(rows, cols) {
    // Clear content of grid element and its inner tags. Clear current grid to remove existing bgcolor on grid cells when changing grid size. 
    grid.innerHTML = ""; 
  

    rows = gridSlider.value;
    cols = gridSlider.value;

    grid.style.setProperty('--grid-rowNum', rows);
    grid.style.setProperty('--grid-colNum', cols);

    // Insert Child Divs for grid
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.appendChild(cell);


        cell.addEventListener('mouseover', (e) => e.target.style.backgroundColor = customColorPicker.value)
    };

};

function displayGridSize() {
    gridSizeDisplayLabel.textContent = `Grid size: ${gridSlider.value} x ${gridSlider.value}`
}




/*

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
    else if (colorMode === 'erase') {
        console.log('erase')
    }
    console.log(colorMode);
}

*/