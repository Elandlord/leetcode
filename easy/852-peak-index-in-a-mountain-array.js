// Solution 1
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let highestNumber = Math.max(...arr);
    return arr.indexOf(highestNumber);
};

// Solution 2
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let highestNumberIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[highestNumberIndex]) highestNumberIndex = i;
    }

    return highestNumberIndex
};

// Solution 3
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        let middle = Math.floor((start+end) / 2);

        if(arr[middle] > arr[middle+1]) {
            end = middle;
        } else {
            start = middle+1;
        }
    }

    return start;
};
