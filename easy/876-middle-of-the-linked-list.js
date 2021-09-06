/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let nodes = [];

    // Transform linked list into array of nodes
    while(head) {
        nodes.push(head.val);
        head = head.next;
    }

    // Determine whether the nodes array is an even number
    if (nodes.length % 2 === 0) {
        nodes = nodes.splice(nodes.length / 2, nodes.length); // Even? get middle node
    } else {
        nodes = nodes.splice(Math.floor(nodes.length / 2), nodes.length); // Uneven? Divide length by two and round number down
    }

    // Transform array into Linked List using reduce
    return nodes.reverse().reduce((acc, curr) => {
        return acc == null ?
            acc = new ListNode(curr) :
            acc = new ListNode(curr, acc);
    }, null);

};
