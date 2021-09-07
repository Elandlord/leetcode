// Core of the solution: the integers are in the range of 1,n (length of array)
// Additionally, numbers appear only once or twice.
// To keep O(n) time and use constant extra space, we can store all nums in their unique index
// Example: input [1,1,2]
// First iteration, 1-1 = 0. nums[0] = 1. 1 > 0 so nums[0] = -1.
// Second iteration, 1-1 = 0. nums[0] = -1. -1 > 0 is false, so push Math.abs(-1) to the duplicate array
// Third iteration, 2-1 = 1. nums[1] = 1. 1 > 0 so nums[1] = -1

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let dupes = [];

    for(const num of nums) {
        // Use Math.abs because number can be flipped before
        let swappedIndex = Math.abs(num) - 1;

        // If the num is higher than 0, it means it was not visited yet.
        if(nums[swappedIndex] > 0) {
            nums[swappedIndex] = nums[swappedIndex] * (-1); // Set the swappedIndex to a negative number.
        } else {
            // Else, num was seen before and is therefore a duplicate.
            dupes.push(Math.abs(num));
        }
    }

    return dupes;
};
