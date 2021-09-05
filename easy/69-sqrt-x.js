/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 || x === 1) return x;    
    if(x === 2) return 1;
    for(let i = 1; i < x; i++) {
        if(i*i > x) return Math.floor(i - 1);      
    }
};
