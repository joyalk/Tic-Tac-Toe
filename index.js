var playerTurn = "X"
var squares = document.querySelectorAll('.square')
var board = document.querySelector('.board')
board.addEventListener("click", function(event) {
    var clickedDiv = event.target
    if (clickedDiv.innerText.trim() != "") {
        return
    } clickedDiv.innerText = playerTurn
      changeTurn()
      checkWin()
    }
)
function changeTurn() {
    if (playerTurn === "X") {
        playerTurn = "O"
    } else {
        playerTurn = "X"
    }
}

function noSquaresLeft() {
    if (
        (squares[0].innerText !== '') &&
        (squares[1].innerText !== '') &&
        (squares[2].innerText !== '') &&
        (squares[3].innerText !== '') &&
        (squares[4].innerText !== '') &&
        (squares[5].innerText !== '') &&
        (squares[6].innerText !== '') &&
        (squares[7].innerText !== '') &&
        (squares[8].innerText !== '')
    ) {
        return 'Tie'
    }
}

function checkWin() {
    if (
        (squares[0].innerText === squares[1].innerText && squares[1].innerText === squares[2].innerText && squares[0].innerText !== "") ||
        (squares[3].innerText === squares[4].innerText && squares[4].innerText === squares[5].innerText && squares[3].innerText !== "") ||
        (squares[6].innerText === squares[7].innerText && squares[7].innerText === squares[8].innerText && squares[6].innerText !== "") ||
        (squares[0].innerText === squares[3].innerText && squares[3].innerText === squares[6].innerText && squares[0].innerText !== "") ||
        (squares[1].innerText === squares[4].innerText && squares[4].innerText === squares[7].innerText && squares[1].innerText !== "") ||
        (squares[2].innerText === squares[5].innerText && squares[5].innerText === squares[8].innerText && squares[2].innerText !== "") ||
        (squares[0].innerText === squares[4].innerText && squares[4].innerText === squares[8].innerText && squares[0].innerText !== "") ||
        (squares[2].innerText === squares[4].innerText && squares[4].innerText === squares[6].innerText && squares[2].innerText !== "")
        ) {
        if (playerTurn === "X") {
        alert ("O wins!")
        } else {
        alert ("X wins!")
        }
        } else if (noSquaresLeft()) {
        alert ("It's a tie!")
        }
    }