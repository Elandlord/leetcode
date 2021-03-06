/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];

    for(let i = 0; i < index.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }

    return target;
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));
console.log(createTargetArray([1,2,3,4,0], [0,1,2,3,0]));
