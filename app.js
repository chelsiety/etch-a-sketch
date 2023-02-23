
const grid = document.querySelector(".grid-container");
const gridSlider = document.querySelector("#grid-size-slider");
const gridSizeDisplayLabel = document.querySelector('label[for="grid-size"]');



// Event listeners
gridSlider.addEventListener('input', displayGridSize)
gridSlider.addEventListener('change', createGrid)

// Functions
function createGrid(rows, cols) {
    rows = gridSlider.value;
    cols = gridSlider.value;

    grid.style.setProperty('--grid-rowNum', rows);
    grid.style.setProperty('--grid-colNum', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.appendChild(cell);
    };
};

createGrid(16, 16);

function displayGridSize() {
    gridSizeDisplayLabel.textContent = `Grid size: ${gridSlider.value} x ${gridSlider.value}`
}



