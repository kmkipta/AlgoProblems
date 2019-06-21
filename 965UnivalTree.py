# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution(object):
    def isUnivalTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root.left is None and root.right is None:
            return True

        currNode = root
        uniVal = root.val
        isUnival = True

        conQ = []
        conQ.append(root.left)
        conQ.append(root.right)
        while conQ: 
            currNode = conQ.pop()
            if currNode != None:
                if currNode.val != uniVal:
                    isUnival = False
                if currNode.left != None:
                    conQ.append(currNode.left)
                if currNode.right != None:
                    conQ.append(currNode.right)
        return isUnival
        
t1 = TreeNode(1)
t2 = TreeNode(1)
t3 = TreeNode(1)
t3.left = t1
t3.right = t2

sol = Solution()
print(sol.isUnivalTree(t1))
