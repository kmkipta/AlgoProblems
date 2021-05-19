# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        curr = head
        prev = None
        
        while curr:
            # need to keep track of next to set to curr 
            # since we lose this
            next = curr.next 
            
            # swap next with prev
            curr.next = prev
            prev = curr
            curr = next
        
        # we return prev, since curr is null end of list
        return prev
                
