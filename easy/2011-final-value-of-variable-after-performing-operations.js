/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;

    for(let i = 0; i < operations.length; i++) {
        operations[i].includes('++') ? x++ : x--;
    }

    return x;
};
