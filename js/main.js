console.log("Javascript is connected");

//Variables and Selectors
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const puzzlePiecesHolder = document.querySelectorAll(".puzzle-pieces");
const dropZones = document.querySelectorAll(".drop-zone");
const resetButton = document.querySelector("#resetBut");
let draggedPiece;

//Functions
function changeBGImage(e){
    backgroundID = e.target.id; 
    console.log(`changeBGimage called (${this.className})`);
    console.log(this.id);
    puzzleBoard.style.backgroundImage = `url(images/backGround${e.target.id}.jpg)`;
    puzzlePieces.forEach(piece => piece.setAttribute('src', piece.getAttribute('src').split(/[0-4]+/).join(e.target.id)));
    resetPuzzle();
}

function handleStartDrag(){
    console.log('started dragging ${this}');
    draggedPiece = this;
}
function handleOver(e){
    e.preventDefault();
    console.log("Dragged Over");
}

function handleDrop(e) {
    if (this.querySelector('.puzzle-image')) {
        console.log('Zone is already occupied');
    }else {
        this.appendChild(draggedPiece);
        console.log(`Piece '${draggedPiece.alt}' placed in '${this.className}'`);
    }
    }

function resetPuzzle() {
    dropZones.forEach(zone => {
    if (zone.firstElementChild) {
    let piece;
    piece = zone.removeChild(zone.firstElementChild); 
    puzzlePiecesHolder.forEach(holder => {holder.appendChild(piece);
    });}});}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
resetButton.addEventListener("click", function() {history.go(0);});