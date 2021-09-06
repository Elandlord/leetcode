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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let levels = {};

    function traverse(node, level = 0) {
        if(node != null) {
            if(level in levels) {
                levels[level].push(node.val);
            } else {
                levels[level] = [];
                levels[level].push(node.val);
            }

            level++;

            traverse(node.left, level);
            traverse(node.right, level);
        }
    }

    traverse(root);

    return Object.values(levels).map((level) => {
        return level.reduce((a, b) => a+b, 0) / level.length;
    });
};
