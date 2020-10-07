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
var deleteDuplicates = function(head) {

    //If head hs no node or only a single node
    if(!head) return null;
    if(!head.next) return head;
    
    //Assign Current position to traverse the List until its second last value
    let curr = head;
    while(curr.next) {
    
        //If curr value equals to next value then move curr pointer to next value.
        if(curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;            
        }
    }
    
    //Return the head of the list.
    return head;
};
