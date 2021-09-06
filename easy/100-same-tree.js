/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function traverse(node, nodes = []) {
        nodes.push(node === null ? '-' : node.val)

        if(node != null) {
            traverse(node.left, nodes);
            traverse(node.right, nodes);
        }
    }

    let nodes1 = [];
    let nodes2 = [];

    traverse(p, nodes1);
    traverse(q, nodes2);

    return nodes1.join('') === nodes2.join('');
};
