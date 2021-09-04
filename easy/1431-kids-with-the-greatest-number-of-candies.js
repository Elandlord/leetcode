/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map(c => c+extraCandies>=max);
};

console.log(kidsWithCandies([2,3,5,1,3], 3)); // output: [true,true,true,false,true]
console.log(kidsWithCandies([4,2,1,1,2], 1)); // output: [true,false,false,false,false]
console.log(kidsWithCandies([12,1,12], 10)); // output: [true,false,true]
