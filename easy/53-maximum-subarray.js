/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Math.max(...nums);
    let currentSum = 0;
    
    for(let i = 0; i < nums.length; i++){ 
        currentSum = Math.max(nums[i], currentSum + nums[i])
        
        maxSum = Math.max(currentSum, maxSum)
        console.log(maxSum)
    }
    return maxSum
};

// Use Kandane's algorithm to find the maximum sum of a contiguous subarray in an array with a runtime of O(n).
