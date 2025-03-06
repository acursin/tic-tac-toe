const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i][j] = createCell();
        }
    }

    const getBoard = () => board;

    const placeToken = (rowCoord, columnCoord, currentPlayer) => {
        board[rowCoord][columnCoord].setValue(currentPlayer.getToken());
    }

    const displayBoard = () => {
        let boardDisplay = '';
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                boardDisplay += board[i][j].getValue();
            }
            boardDisplay += '\n';
        }

        console.log(boardDisplay);
    }

    return { getBoard, placeToken, displayBoard };
})();

function createCell () {
    let value = 0;

    const getValue = () => value;

    const setValue = (newValue) => {
        value = newValue;
    }

    return { getValue, setValue }
}

// const gameController = (function () {
//     const players = createPlayers();
//     let activePlayer = players[0];
//     let gameWinner = 0;

//     while (!gameWinner) {
//         playRound(activePlayer);
//     }

//     return (gameWinner);
// })();

function createPlayer (name, token) {
    const getName = () => name;
    const getToken = () => token;

    return { getName, getToken };
}