var deepestLeavesSum = function(root) {
    let levelMap = {}; // create map to store all the nodes of each level in.

    function traverse(node, level = 0) { // declare function to traverse the tree (note the `level` parameter, which defaults to zero).

        if(node === null) return; // return null if the node does not exist

        if(levelMap[level] === undefined) levelMap[level] = []; // initialise an array for this specific level (see `level` parameter).

        levelMap[level].push(node.val); // push the value of the current node to the array

        level++; // increment the level

        traverse(node.left, level); // visit the left child node, passing the incremented level
        traverse(node.right, level); // visit the right child node, passing the incremented level
    }

    traverse(root); // call the traverse function with the root

    return Object.values(levelMap)[Object.values(levelMap).length - 1]
        .reduce((a, b) => a+b, 0); // return the last index of the object, and use reduce to sum all the values of the nodes in that level.
};
