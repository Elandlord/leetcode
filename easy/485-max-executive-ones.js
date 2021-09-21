/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutiveOnes = 0;
    let counter = 0;

    for(let i = 0; i < nums.length; i++) {
        nums[i] === 1
            ? counter++
            : counter = 0;

        if(counter > maxConsecutiveOnes) maxConsecutiveOnes = counter;
    }

    return maxConsecutiveOnes;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // 2
