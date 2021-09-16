/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {

    let highest = Math.max(...nums);
    let lowest = Math.min(...nums);

    if(highest === 0) return highest;

    for(let i = highest; i >= 0; i--) {
        if(highest % i === 0 && lowest % i === 0) return i;
    }
};
