/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    //Set 2 Pointers 
    let Head1 = new ListNode(-1, head), curr = Head1, curr1 = head;
    
    //If length is 1 or less than 1 then return null
    if(curr1.next === null) { return null;}
    
    //Run the loop to the end of the Linked List
    while(curr1) {
        curr1 = curr1.next;
        //If n <= 0, change second pointer to next value until 1st pointer is null
        if(n > 0) {
            n--;              
        } else { 
            curr = curr.next; 
        }  
    }
    
    //Move LL pointer to adjacent node
    curr.next = curr.next.next;
    return Head1.next;
};

//Time-Complexity = O(n)
//Space-Complexity = O(1)
