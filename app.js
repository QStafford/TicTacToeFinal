// X is always first
//if there is a winner or a draw use an alert
//clicking the board when the game is over will reset the board
/*ideas
define player_1 and player_2
when clicked determines player1 and 2
changeTurn function
winner function

*/
let cells = document.querySelectorAll('.row > div')

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
}

function cellClicked () {
    event.target.textContent = 'X'
}

