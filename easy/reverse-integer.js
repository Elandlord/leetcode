/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0;

    let reverseNum = String(Math.abs(x)).split('').reverse().map(n=>+n).join('')
    let inBounds = Math.abs(reverseNum) < (Math.pow(2, 31) - 1);

    if (!inBounds) return 0;

    return isNegative ? -reverseNum : reverseNum;
};
