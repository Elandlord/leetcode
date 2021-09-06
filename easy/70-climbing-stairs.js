/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 1;
    let second = 0;
    let temp = 0;

    while (n >= 0){
        temp = first;
        first = first + second;
        second = temp;
        n--;
    }

    return second;
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(25));
