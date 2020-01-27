/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const swap = (node1, node2) => {
  let tempNode = {
    val: null,
    next: null
  }
  console.log(node1)
  console.log(node2)
  
  tempNode = node1
  node1 = node2
  node2 = tempNode
  
  console.log(node1)
  console.log(node2)
}

const helper = (head) => {
  
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let memoHead = head
  if(head.next.next == null)
    return
  
  swap(head, head.next)
  
  return head
};
