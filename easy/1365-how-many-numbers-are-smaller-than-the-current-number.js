/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map((compareNum, outerIndex) => {
        return nums.filter((innerNum, innerIndex) => {
            if(innerIndex === outerIndex) return false;

            return innerNum < compareNum;
        }).length;
    });
};
