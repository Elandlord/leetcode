/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// Solution 2 (using maps)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];

        if(map.has(remainder)) return [map.get(remainder), i];

        map.set(nums[i], i)
    }
};
