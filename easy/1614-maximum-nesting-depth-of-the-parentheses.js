/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let highest = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') count++;
        if (s[i] === ')') count--;

        highest = Math.max(count, highest);
    }

    return highest;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("(1)+((2))+(((3)))")); // 3
console.log(maxDepth("1+(2*3)/(2-1)")); // 1
console.log(maxDepth("1")); // 0

