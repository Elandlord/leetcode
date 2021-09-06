/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let nodes = [];


    while(head) {
        if(head.val !== val) nodes.push(head.val);
        head = head.next;
    }

    return nodes.reverse().reduce((acc, curr) => {
        return acc == null ? new ListNode(curr) : new ListNode(curr, acc);
    }, null);
};
