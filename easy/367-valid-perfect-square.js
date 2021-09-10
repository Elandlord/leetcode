/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num === 1) return true;

    let start = 0;
    let end = Math.floor(num / 2);

    while(start <= end) {

        let mid = Math.floor((start + end) / 2)

        let result = mid * mid;

        if(result === num) return true;

        if(result < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
};
