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
var minDepth = function(root) {

    let nodes = [];

    let minDepth = Infinity;

    function traverse(node, level = 0) {
        if(node != null) {
            if(node.left === null && node.right === null && level+1 < minDepth) minDepth = level+1;

            level++;

            traverse(node.left, level);
            traverse(node.right, level);
        }
    }

    traverse(root);

    return minDepth === Infinity ? 0 : minDepth;
};
