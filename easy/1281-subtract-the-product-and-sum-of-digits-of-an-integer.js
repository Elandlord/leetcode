/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

    let splittedNumber = n.toString().split('');

    let product = splittedNumber.reduce((a, b) => parseInt(a) * parseInt(b), 1);
    let sum = splittedNumber.reduce((a, b) => parseInt(a) + parseInt(b), 0);

    return product - sum;
};
