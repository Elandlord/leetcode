/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastValidIndexPosition = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= lastValidIndexPosition) lastValidIndexPosition = i;
    }

    return lastValidIndexPosition === 0;
};

console.log(canJump([2,3,1,1,4])); // output: true

// Instead of moving forwards, loop backwards over the nums array
// The lastValidIndexPosition is set to the last index in of the array by default
// Essentially, for every iteration in the for loop, if the current index + the jump length >= the last valid index position,
// it means the position in the array is reachable by jumping
// all that's left, is asserting that the lastValidIndexPosition is equal to zero (in this case, the first number of the number array).
// That means that the first index of the array is reachable by jumping, and therefore canJump equals true.
// If the lastValidIndexPosition is higher than zero, it means there is no jump path possible from the start to the finish of the array, and therefore canJump equals false.
