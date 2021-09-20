var tictactoe = function(moves) {
    // Initialize player, winner and grid (3x3, fill with '-') variables
    let player = 'X';
    let winner = null;
    let grid = [...Array(3)].map(m => [...Array(3)].fill('-'));

    // For each move, set the appropriate grid location to the currentPlayer (X or O)
    moves.forEach((move) => {
        grid[move[0]][move[1]] = player;
        player = player === 'X' ? 'O' : 'X';
    });

    // Transform the grid "rows" into columns
    let columns = grid.map((line, index) => [grid[0][index], grid[1][index], grid[2][index]]);

    // For each "line" of the grid, check if the row only has 'X' or 'O'. Set winner accordingly.
    grid.forEach((line) => {
        if(checkRow(line, 'X')) winner = 'A';
        if(checkRow(line, 'O')) winner = 'B';
    })

    // For each "column" of the grid, check if the row only has 'X' or 'O'. Set winner accordingly.
    columns.forEach((column) => {
        if(checkRow(column, 'X')) winner = 'A';
        if(checkRow(column, 'O')) winner = 'B';
    });

    // for each player, check if one of either diagonals only has 'X' or '0'. Set winner accordingly.
    if(checkDiagonal(grid, 'X')) winner = 'A';
    if(checkDiagonal(grid, 'O')) winner = 'B';

    // Winner set? Then return the winner.
    if(winner !== null) return winner;

    // No winner? If the length of moves equals 9, that means the game finished in a draw. Otherwise, it is still pending.
    return moves.length === 9
        ? 'Draw'
        : 'Pending';
};

// Check if row entries are equal to the player
function checkRow(row, player) {
    return row[0] === player &&
        row[1] === player &&
        row[2] === player;
}

// check if one of the diagonal entries are equal to the player
function checkDiagonal(grid, player) {
    return (grid[0][0] === player &&
            grid[1][1] === player &&
            grid[2][2] === player)
        ||
        (grid[0][2] === player &&
            grid[1][1] === player &&
            grid[2][0] === player)
}

console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])); // A
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]])); // B
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])); // Draw
console.log(tictactoe([[0,0],[1,1]])); // Pending
console.log(tictactoe([[2,2],[0,2],[1,0],[0,1],[2,0],[0,0]])); // B
