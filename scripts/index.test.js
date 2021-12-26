const ticTacToe = require('../scripts/tictactoe');
const GAME_OVER_MSG = 'game over a tie';


describe('TicTacToe Tests', () => {
    const players_mock = {playerX: {name: 'Vanya'}, playerY: {name: 'Ivan'}};

    test('check current player is X', () => {
        expect(ticTacToe.currentPlayer(4)).toBe('X');
    });

    test('check current player is 0', () => {
        expect(ticTacToe.currentPlayer(1)).toBe('O');
    });


    test('should be game over', () => {
        expect(ticTacToe.checkIfTie(8)).toBe(GAME_OVER_MSG);
    });

    test('should not be game over', () => {
        expect(ticTacToe.checkIfTie(5)).toBe(undefined);
    });

    test('Player Y should win', () => {
        expect(ticTacToe
            .getWinnerName(5, players_mock))
            .toBe('Ivan');
    })

    test('Player X should win', () => {
        expect(ticTacToe
            .getWinnerName(6, players_mock))
            .toBe('Vanya');
    })
})


