/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const swap = (node1, node2, current) => {
  let tempNode = {
    val: null,
    next: null
  }

  // build second node
  tempNode = node1
  tempNode.next = node2.next 

  // build & assign first node
  node1 = node2
  node1.next = tempNode

  // assign second node
  node2 = tempNode

  console.log(node1.val)
  console.log(node2.val)

}

const helper = (current, head, isHeadSwapped) => {
  if(current.next == null)
    return

  swap(current, current.next)

  if (!isHeadSwapped) {
    isHeadSwapped = true
    head = current
  }

  if (current.next != null && current.next.next != null) {
    current = current.next
    helper(current, head, isHeadSwapped)
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let current = head
  let isHeadSwapped = false
  if(head.next == null)
    return head

  helper(current, head, isHeadSwapped)
  
  return head
};

let four = {
  val: 4,
  next: null
}

let three = {
  val: 3,
  next: four
}

let two = {
  val: 2,
  next: three
}

let one = {
  val: 1,
  next: two
}

swapPairs(one)