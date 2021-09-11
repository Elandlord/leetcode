/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = n, sums = [];

    while(sum > 1) {
        sums.push(sum);
        sum = sum.toString().split('').map(n => parseInt(n) * parseInt(n)).reduce((a, b) => a+b, 0);
        if(sums.includes(sum)) break;
    }

    return sum === 1;
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
console.log(isHappy(13));
console.log(isHappy(1));
console.log(isHappy(556));
