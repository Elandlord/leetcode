/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Math.max(...nums);
    let currentSum = 0;

    nums.forEach((num, i) => {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(currentSum, maxSum);
    });

    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
// Use Kandane's algorithm to find the maximum sum of a contiguous subarray in an array with a runtime of O(n).
