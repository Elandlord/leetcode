// Solution 1 (Set) O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let temp = [];

    for (num of nums) {
        if(temp.includes(num)) return num;

        temp.push(num);
    }

    return -1;
};

// Solution 2 (binary search)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let start = 1;
    let end = nums.length - 1;

    let duplicate = -1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);

        let count = 0;

        for(num of nums) {
            if (num <= mid) count++;
        }

        if (count > mid) {
            duplicate = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return duplicate;
};
