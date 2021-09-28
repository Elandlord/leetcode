/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let evens = nums.filter(num => num % 2 === 0);
    let odds = nums.filter(num => num % 2 !== 0);

    let answer = [];

    for(let i = 0; i < nums.length; i++) {
        let num = i % 2 === 0 ? evens.pop() : odds.pop();
        answer.push(num);
    }

    return answer;
};

console.log(sortArrayByParityII([4,2,5,7])); // [4,5,2,7] OR [4,7,2,5], [2,5,4,7], [2,7,4,5]
console.log(sortArrayByParityII([2,3])); // [2,3]

