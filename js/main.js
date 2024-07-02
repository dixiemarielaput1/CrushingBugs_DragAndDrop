console.log("Javascript is connected");

//Variables and Selectors
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const puzzlePiecesHolder = document.querySelectorAll(".puzzle-pieces");
const dropZones = document.querySelectorAll(".drop-zone");
const resetButton = document.querySelector("#resetBut");
let draggedPiece;

function changeBGImage(e){

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

}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
resetButton.addEventListener("click", function() {history.go(0);});
