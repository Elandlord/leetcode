const isOutOfBound = (board, y, x) => y < 0 || y >= board.length || x < 0 || x >= board[0].length;

const checkNeighbors = (board, word, y, x) => {
    if (!word.length) return true;
    if (isOutOfBound(board, y, x) || board[y][x] !== word[0]) return false;

    const curChar = board[y][x];
    const newWord = word.substr(1);

    board[y][x] = 0;

    const results = checkNeighbors(board, newWord, y + 1, x) ||
        checkNeighbors(board, newWord, y - 1, x) ||
        checkNeighbors(board, newWord, y, x + 1) ||
        checkNeighbors(board, newWord, y, x - 1);

    board[y][x] = curChar;

    return results;
};

let exist = function(board, word) {
    for (let y = 0; y < board.length; y++) {
        for (let x  = 0; x < board[0].length; x++) {
            if (checkNeighbors(board, word, y, x)) return true;
        }
    }
    return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // true
