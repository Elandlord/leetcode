/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const height = matrix.length;
    const width = matrix[0].length;

    let flaggedRows = new Map();
    let flaggedCols = new Map();

    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(matrix[i][j] === 0) {
                flaggedRows.set(i);
                flaggedCols.set(j);
            }
        }
    }

    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(flaggedRows.has(i) || flaggedCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};
