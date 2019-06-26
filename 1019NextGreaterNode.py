import json

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    # runtime O(n^2)
    def nextLargerNodes(self, head):
        """
        :type head: ListNode
        :rtype: List[int]
        """
        res = []
        currNode = head

        # slow runner outer loop to build result
        while head.next != None:
            # use head var to control outer loop
            currNode = head
            # fast runner inner loop
            while currNode != None:
                maxNum = 0
                if currNode.val > head.val:
                    maxNum = currNode.val
                    break
                currNode = currNode.next
            res.append(maxNum)
            head = head.next

        # clean up tail; tail will always end in 0
        res.append(0)
        return res

    def nextLargerNodesStack(self, head: ListNode) -> List[int]:
        res, stack, idx = [], [], 0
        while head:
            while stack and stack[-1][0] < head.val:
                _, i = stack.pop()
                res[i] = head.val
            
            res.append(0)
            stack.append((head.val, idx))
            idx += 1
            head = head.next
        return res
        
def stringToListNode(input):
    # Generate list from the input
    numbers = json.loads(input)

    # Now convert that list into linked list
    dummyRoot = ListNode(0)
    ptr = dummyRoot
    for number in numbers:
        ptr.next = ListNode(number)
        ptr = ptr.next

    ptr = dummyRoot.next
    return ptr

sol = Solution()
head = stringToListNode('[1,7,5,1,9,2,5,1]')

print(sol.nextLargerNodes(head))


# stack[-1][0] - this (-) pulls from right, and stack 