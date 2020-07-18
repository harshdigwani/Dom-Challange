let box = document.getElementById('main');
let color = ""
box.className = "box";

let colorsBox =  document.querySelectorAll("color");

function createBox(row, col) {

    for (i = 0; i < row; i++) {
        let row = document.createElement("div");
        row.className = "row"
        box.appendChild(row)
        for (j = 0; j < col; j++) {
            let cell = document.createElement("div");
            cell.addEventListener("click", () => changeCellColor(this, color));
            cell.className = "cell"
            row.appendChild(cell);
        }
    }
}

function changeCellColor(obj, color) {
    obj.style.backgroundColor = color;
}

createBox(10, 10)