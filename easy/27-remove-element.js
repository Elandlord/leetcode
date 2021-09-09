/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0) return 0;

    let count = 0; // start counting at 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[count] = nums[i]; // if the nums does not equal the value, this must mean the number should be inserted at the index of count in the array.
            count++; // increment count, so the array is prepared for the next iteration (to insert a number that is not value)
        }
    }

    return count;
};

console.log(removeElement([3,2,2,3], 3)); // output: 2 (2's left)
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // output: 5
console.log(removeElement([0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,0,2,4,2], 2)); // output: 5
