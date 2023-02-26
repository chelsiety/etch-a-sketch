const grid = document.querySelector(".grid-container");
const gridSlider = document.querySelector("#grid-size-slider");
const gridSizeDisplayLabel = document.querySelector('label[for="grid-size"]');
const colorModeButtons = document.querySelectorAll(".color-mode-button");

const customColorPicker = document.querySelector("#custom-color-picker");
const customColorButton = document.querySelector('#custom-color-button');
const clearButton = document.querySelector('#clear-button');

let colorMode = "custom-color" // default color mode


// EVENT LISTENERS

// Change grid size
gridSlider.addEventListener('input', displayGridSize)
gridSlider.addEventListener('change', createGrid)

// Loop through the buttons and add the active class to the current/clicked button
colorModeButtons.forEach(colorButton => colorButton.addEventListener('click', function(event) {
    addActiveButtonClass(event);
    getActiveColorButton(event);
}));

// Clear grid 
    clearButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('.grid-cell');
   
        cells.forEach(cell => {
            cell.style.backgroundColor = null;
            cell.style.opacity = null;
        }); 
});




// FUNCTIONS

function setUpDefaultSettings() {
    // Set up grid
    let rows = gridSlider.value;
    let cols = gridSlider.value;
    createGrid(rows, cols);

    customColorButton.classList.add('active');
}

function displayGridSize() {
    gridSizeDisplayLabel.textContent = `Grid size: ${gridSlider.value} x ${gridSlider.value}`
}

function addActiveButtonClass(event){
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
}

// Updates colorMode variable value when a color button is clicked
function getActiveColorButton(event){
    switch (event.target.dataset.name) {
        case "random-color":
            colorMode = "random-color";
            break;
        case "rainbow":
            colorMode = "rainbow";
            break;
        case "grayscale":
            colorMode = "grayscale";
            break;
        case "erase":
            colorMode = "erase";
            break;
        default:
            colorMode = "custom-color"; 
    }
}


function createGrid(rows, cols) {
    // Clear content of grid element and its inner tags. Clear current grid to remove existing bgcolor on grid cells when changing grid size. 
    grid.innerHTML = ""; 
  
    rows = gridSlider.value;
    cols = gridSlider.value;

    // Change the value of the CSS variables in JavaScript
    grid.style.setProperty('--grid-rowNum', rows);
    grid.style.setProperty('--grid-colNum', cols);

    // Insert Child Divs for grid
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.appendChild(cell);

        // Event listeners in grid
        cell.addEventListener('mouseover', () => setColorMode(cell));        
    };
}

function setColorMode(cell) {
    //Use current colorMode value determined by the getActiveColorButton() function
    switch (colorMode) {
        case "random-color":
            getRandomColor(cell);
            break;
        case "rainbow":
            getRainbow(cell);
            break;
        case "grayscale":
            getGrayScale(cell);
            break;
        case "erase":
            getEraser(cell);
            break;
        default:
            getCustomColor(cell);
    }
}

function getRandomColor(cell) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Makes the cell have a random RGB color code background color
    cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
}

// Set global initial hue value for getRainbow() function
let hue = 0;  
function getRainbow(cell) {
    // Set variable hue value, fixed saturation value and lightness value
    let rainbowColorValue = `hsl(${hue}, 100%, 50%)`;  
    hue += 10;
    cell.style.backgroundColor = rainbowColorValue;
}

function getGrayScale(cell) {
    /* Make the target grid cell get incrementally darker in shade by increasing the opacity with each pass of the mouseover event */

    // Set grid cell background color to black 
    cell.style.backgroundColor = 'hsl(0, 0%, 0%)'; 

    let opacity = cell.style.opacity;      // Get current opacity value of cell
    if (opacity < 1) {
        cell.style.opacity = Number(cell.style.opacity) + 0.1;  // Increment the opacity value 
    } else {
        cell.style.opacity = 1;  // Limits the max opacity value
    };
};

function getEraser(cell) {
    cell.style.backgroundColor = null;
    cell.style.opacity = null;
}

function getCustomColor(cell){
    cell.style.backgroundColor = customColorPicker.value;
}


// Initialization
setUpDefaultSettings()
