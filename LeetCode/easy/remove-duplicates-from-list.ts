// leet code: https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current: ListNode = head;

    if(head == null) return head

    while(current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }

    }
    return head;
};
