
const grid = document.querySelector(".grid-container");
const gridSlider = document.querySelector("#grid-size-slider");
const gridSizeDisplayLabel = document.querySelector('label[for="grid-size"]');
const colorModeButtons = document.querySelectorAll(".color-mode-button");

const customColorPicker = document.querySelector("#custom-color-picker");
const customColorButton = document.querySelector('#custom-color-button')

// let defaultColorMode = "custom-color"; // default






// EVENT LISTENERS
gridSlider.addEventListener('input', displayGridSize)
gridSlider.addEventListener('change', createGrid)

/*
customColorPicker.addEventListener('input', ()=> {
    console.log(customColorPicker.value)
    CELL.style.backgroundColor = customColorPicker.value

});
*/

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