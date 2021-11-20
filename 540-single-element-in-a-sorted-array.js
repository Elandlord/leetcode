
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    
    let binarySearch = (start, end) => {
        let midIndex = Math.floor((start + end) / 2);
        
        if (nums[midIndex] == nums[midIndex - 1]) {
            return midIndex % 2 ? binarySearch(midIndex + 1, end) : binarySearch(start, midIndex);
        }
        
        if (nums[midIndex] == nums[midIndex + 1]) {
            return midIndex % 2 ? binarySearch(start, midIndex - 1) : binarySearch(midIndex, end);
        }
        
        return nums[midIndex];
    }
    

    return binarySearch(0, nums.length - 1);
};
