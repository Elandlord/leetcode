/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let firstHalf = nums.splice(0, n);
    let newArray = [];

    for(let i = 0; i < n; i++) {
        newArray.push(firstHalf[i], nums[i]);
    }

    return newArray.flat();
};

// console.log(shuffle([2,5,1,3,4,7], 3)); // output:[2,3,5,4,1,7]
// console.log(shuffle([1,2,3,4,4,3,2,1], 4)); // output: [1,4,2,3,3,2,4,1]
// console.log(shuffle([1,1,2,2], 2)); // output: [1,2,1,2]
