/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let levelMap = {};

    function traverse(node, level = 0) {

        if(node === null) return;

        if(levelMap[level] === undefined) levelMap[level] = [];

        levelMap[level].push(node.val);

        level++;

        traverse(node.left, level);
        traverse(node.right, level);
    }

    traverse(root);


    return Object.values(levelMap)[Object.values(levelMap).length - 1]
        .reduce((a, b) => a+b, 0);
};
