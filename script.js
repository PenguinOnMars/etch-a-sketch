let color = 'black';
let click = true;

function populateBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        // square.addEventListener('mouseover', function(e){
        //     if(e.buttons == 1 || e.buttons == 3){
        //         colorSquare(e);
        //     }
        // })
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeSize(input) {
    if(input >= 2 || input <= 100){
        populateBoard(input);
    } else {
    console.log("Error: too many squares");
    }
}

function colorSquare() {
    if (click) {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) =>{
    if(e.target.tagName != 'BUTTON'){
        click = !click;
        if(click) {
            document.querySelector('.mode').textContent = "Mode: Coloring";
        } else {
            document.querySelector('.mode').textContent = "Mode: Not Coloring";
        }
    }
});