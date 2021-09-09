/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;

    let result = 1; // start at 1, because the first number is always unique and therefore does not have to be checked

    for(let i = 0; i < nums.length - 1; i++) { // nums.length - 1 to prevent going out of array bounds
        if(nums[i] !== nums[i+1]) { // if the current number is not equal to the next number in the array
            nums[result] = nums[i+1]; // the current index of "result" equals the next number in the list
            result++;
        }
    }

    return result;
};

// Example
// result = 1;
// 1,1,2
// first iteration, i=0, nums[0] = 1, nums[i+1] = 1 so skip this iteration (numbers are equal).
// second iteration, i=1, nums[1] = 1, nums[i+1] = 2 so, put nums[1 (result)] = 2 (nums[i+1]) and increment result (result = 2);
