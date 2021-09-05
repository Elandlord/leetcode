/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(str) {
    let nonSpaceWords = str.split(' ').filter(Boolean);
    return nonSpaceWords[nonSpaceWords.length - 1].length ?? 0;
};
