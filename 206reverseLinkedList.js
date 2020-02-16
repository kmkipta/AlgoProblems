/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = (head) => {
    if(head == null || head.next == null)
        return head

    // sep list into head and remaining
    const rest = reverseList(head.next)
    head.next.next = head
    head.next = null
    return rest
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

console.log(reverseList(one))