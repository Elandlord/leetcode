/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return String(x).split('').join('') === String(x).split('').reverse().join('');
};
