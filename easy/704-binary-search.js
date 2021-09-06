/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    function binarySearch(numbers, target, start = 0, end = numbers.length - 1) {

        let mid = Math.floor((start + end) / 2)

        if (numbers[mid] === target) return mid;

        if (start >= end) return -1;

        return target < numbers[mid] ?
            binarySearch(numbers, target, start, mid-1) :
            binarySearch(numbers, target, mid+1, end);
    }

    return binarySearch(nums, target);

};

console.log(search([-1,0,3,5,9,12], 2)); // -1 (not found)
