/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastDigit = parseInt(digits[digits.length - 1]);
  
    if(lastDigit === 9) {
      if(digits.length > 1) {
        let counter = 0;
        while(digits[digits.length - (1+counter)] === 9) {
            digits[digits.length - (1+counter)] = 0;
            counter++;
        }
        if(counter === digits.length) {
          digits.unshift(1);
        } else {
          digits[digits.length - (1+counter)] += 1;
        }
        
      } else {
        digits[0] = 1;
        digits[1] = 0;
      }
    } else {
      digits[digits.length - 1] = parseInt(lastDigit) + 1;
    }
  
    return digits;
};

console.log(plusOne([1,2,3])) // output: [1,2,4]
console.log(plusOne([9])) // output: [1,0]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])) // output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(plusOne([9,9,9])) // output: [1,0,0,0]
console.log(plusOne([9,9,9,9,9])) // output: [1,0,0,0]
console.log(plusOne([5,9,9,9,9])) // output: [6,0,0,0,0]

