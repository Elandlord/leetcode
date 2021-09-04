/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    return boxes.split('').map((box, outerIndex) => {
        return [...Array(boxes.length)].map((_, innerIndex) => {
            return (innerIndex === outerIndex || boxes.charAt(innerIndex) === "0")
                ? 0 : Math.abs(innerIndex-outerIndex);
        }).reduce((a, b) => a+b, 0);
    });
};

// console.log(minOperations("110")); // output: [1,1,3]
// console.log(minOperations("001011")); // output: [11,8,5,4,3,4]


