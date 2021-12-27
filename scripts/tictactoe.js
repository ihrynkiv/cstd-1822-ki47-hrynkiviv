// RETURN CURRENT PLAYER
const GAME_OVER_MSG = 'game over a tie';
function currentPlayer(turn) {
    return turn % 2 === 0 ? 'X' : 'O';
}

function checkIfTie(turn) {
    if (turn > 7) {
        return GAME_OVER_MSG
    }
}

function getWinnerName(turn, players) {
    if (currentPlayer(turn) === 'X') {
        return players.playerX.name
    }
    return players.playerY.name
}

module.exports = {
    currentPlayer,
    checkIfTie,
    getWinnerName
}