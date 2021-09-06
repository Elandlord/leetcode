/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singleDigits = [];
    let doubleDigits = [];

    for(let i = 0; i < nums.length; i++) {
        let digit = nums[i];
        if(doubleDigits.includes(digit)) continue;

        if(singleDigits.includes(digit)) {
            singleDigits.splice(singleDigits.indexOf(digit), 1);
            doubleDigits.push(digit);
            continue;
        }

        singleDigits.push(digit);
    }

    return singleDigits;
};

console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([1])); // 1
