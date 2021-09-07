/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let sideLength = matrix.length;

    for(let y = 0; y < sideLength; y++) {
        for(let x = y; x < sideLength; x++) {
            let temp = matrix[y][x];

            matrix[y][x] = matrix[x][y];
            matrix[x][y] = temp;
        }
    }

    for(let y = 0; y < sideLength; y++) {
        for(let x = 0; x < sideLength / 2; x++) {
            let temp = matrix[y][x];

            matrix[y][x] = matrix[y][sideLength-1-x];
            matrix[y][sideLength-1-x] = temp;
        }
    }

    return matrix;
};
