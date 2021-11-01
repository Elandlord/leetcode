/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let count = 1;
    let totals = [];

    while(count <= arr.length) {
        let totalArr = [];

        let total = 0;

        for(let i = 0; i < count; i++) {
            total += arr[i];
        }

        totalArr.push(total);

        for(let i = count; i < arr.length; i++) {
            total += arr[i] - arr[i - count];

            totalArr.push(total);
        }

        let red = totalArr.reduce((a,c) => a + c);
        totals.push(red)
        count += 2;       
    }  

    return totals.reduce((a,c) => a + c)
};
