/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    return matrix[0].map((columnToBe, outerIndex) => {
        return matrix.map(rowToBe => rowToBe[outerIndex]);
    });
};
