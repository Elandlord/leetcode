/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if(n === 0) return 0;

    let pow = 1;
    let num = 1;
    let nums = [0];
    let start = 0;

    while(num <= n) {

        if(num === pow) {
            pow = pow * 2;
            start = 0;
        }

        nums[num++] = nums[start++] + 1;
    }

    return nums;
};

console.log(countBits(2));
console.log(countBits(5));
