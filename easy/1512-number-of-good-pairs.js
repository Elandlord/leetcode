/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let pairs = [];

    nums.forEach((num, i) => {
        for(let j = i+1; j < nums.length; j++) {
            if(!pairs.includes(`${i} ${j}`) && num === nums[j]) pairs.push(`${i} ${j}`);
        }
    });
    return pairs.length;
};

// console.log(numIdenticalPairs([1,2,3,1,1,3])); // output: 4 (0,3), (0,4), (3,4), (2,5) 0-indexed.
// console.log(numIdenticalPairs([1,1,1,1])); // output: 6 (0,1), (0,2), (0,3), (1,2), (1,3), (2,3) 0-indexed
// console.log(numIdenticalPairs([1,2,3])); // output: 0
