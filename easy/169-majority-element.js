// Solution 1 with Object (map)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let occurences = {};

    for(num of nums) {
        num in occurences ? occurences[num] += 1 :  occurences[num] = 1;
    }

    return Object.keys(occurences)
        .reduce(function(a, b) {
            return occurences[a] > occurences[b] ? a : b
        });
};

console.log(majorityElement([2,2,1,1,1,2,2])); // 2

// Solution 2 (Sorting and taking n/2 value
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
};

// Solution 3 (Boyer-Moore Voting Algorithm)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;

    for (num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (candidate === num) ? 1 : -1;
    }

    return candidate;
};

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2


