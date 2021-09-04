/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((n, i) => {
        if(i === 0) return n;

        let sum = 0;

        for(let j = 0; j <= i; j++) {
            sum += nums[j];
        }

        return sum;
    });
};
