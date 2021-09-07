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
