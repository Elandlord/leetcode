/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    return Math.max(...n.split(''));
};

// console.log(minPartitions("27346209830709182346")); // output: 9

// the solution is simple, for 99 (highest number < 100) the required numbers would be 11 (highest deci-binary number < 100). 11 fits 9 times.
// for 999 (highest number < 1000) the required numbers would be 111 (highest deci-binary number < 1000). 111 fits 9 times.
// for 86 (random number) the required numbers would be 8, namely: 6*11 and 2 * 10.
// this logic repeats, no matter the size of the solution.
