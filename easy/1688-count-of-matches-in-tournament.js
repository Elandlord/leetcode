/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches = 0;

    while (n !== 1) {
        let match = Math.floor(n / 2);
        matches += match;
        n = n - match;
    }

    return matches;
};

console.log(numberOfMatches(7)); // 6
console.log(numberOfMatches(14)); // 13
