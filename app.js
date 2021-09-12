// X is always first
//if there is a winner or a draw use an alert
//clicking the board when the game is over will reset the board
/*ideas
define player_1 and player_2
when clicked determines player1 and 2
changeTurn function
winner function
after game is over click to reset
*/
let cells = document.querySelectorAll('.row > div')

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
}

function cellClicked () {
    event.target.textContent = player_1
}

let player_1 = 'X'
let player_2 = 'O'
let turn = true
/*
function changeTurn (){
    if (event.textContent = player_1) {
        return(event.textContent = player_2)
        
    }
    else{
        event.textContent = player_1
    }
}
*/
function playerTurn() {
    if (textContent = player_1) {
         event.textContent = player_2
    }
}

function chooseWinner(){

}

function reset(){

}