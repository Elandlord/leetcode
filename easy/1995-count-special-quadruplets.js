/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {

    let count = 0;

    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i + 1; j < nums.length - 2; j++) {
            for(let x = j + 1; x < nums.length - 1; x++) {
                for(let y = x + 1; y < nums.length; y++) {
                    if(nums[i] + nums[j] + nums[x] === nums[y]) count++;
                }
            }
        }
    }

    return count;

};
