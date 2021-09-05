/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    nums1.push(...nums2);
    
    let sortedArray = nums1.sort((a, b) => a-b);
  
    if (sortedArray.length === 1) return sortedArray[0];
  
    if (sortedArray.length % 2 !== 0) {
        return sortedArray[(sortedArray.length - 1) / 2]; 
    } 
        
    return (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2;
};

// Mean of an even sorted array is taking the average of both middle numbers
// Mean of an uneven sorted array is taking the middle number (array.length - 1) / 2

console.log(findMedianSortedArrays([1,3], [2])); // 2
console.log(findMedianSortedArrays([1,2], [3,4])); // 2.5
console.log(findMedianSortedArrays([0,0], [0,0])); // 0
console.log(findMedianSortedArrays([], [1])); // 1
console.log(findMedianSortedArrays([2], [])); // 2
console.log(findMedianSortedArrays([1,3], [2,7])); // 2.5