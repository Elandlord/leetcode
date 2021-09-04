/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    return jewels.split('').map((jewel) => {
        return stones.split('').filter(stone => stone === jewel).length;
    }).reduce((a, b) => a+b, 0);
};

// console.log(numJewelsInStones("aA", "aAAbbbb")); // output: 3
// console.log(numJewelsInStones("z", "ZZ")); // output: 0
// console.log(numJewelsInStones("AbC", "AAbCCC")); // output: 6
// console.log(numJewelsInStones("ABC123", "abc123")); // output: 3

