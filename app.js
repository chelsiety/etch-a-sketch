
const grid = document.querySelector(".grid-container");


function createGrid(rows, cols) {
    grid.style.setProperty('--grid-rowNum', rows);
    grid.style.setProperty('--grid-colNum', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.appendChild(cell);
    };
};

createGrid(16, 16);
