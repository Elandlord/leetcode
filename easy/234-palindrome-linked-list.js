/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    let nodes = [];

    while(head != null) {
        nodes.push(head.val);
        head = head.next;
    }

    return nodes.join('') === nodes.reverse().join('');
};
