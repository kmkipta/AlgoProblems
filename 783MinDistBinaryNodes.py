# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# need to use dfs 
# complexity is O(N log N), from sorting
class Solution:
    def minDiffInBST(self, root: TreeNode) -> int:
        # instantiate to pos and neg inf
        self.prev = float('-inf') 
        self.minDist = float('inf')        
        self.dfs(root)
        return self.minDist


    def dfs(self, root: TreeNode):
        if root is not None:
            self.dfs(root.left)
            self.minDist = min(self.minDist, root.val - self.prev)
            self.prev = root.val
            self.dfs(root.right)

# utility
def stringToTreeNode(input):
    input = input.strip()
    input = input[1:-1]
    if not input:
        return None

    inputValues = [s.strip() for s in input.split(',')]
    root = TreeNode(int(inputValues[0]))
    nodeQueue = [root]
    front = 0
    index = 1
    while index < len(inputValues):
        node = nodeQueue[front]
        front = front + 1

        item = inputValues[index]
        index = index + 1
        if item != "null":
            leftNumber = int(item)
            node.left = TreeNode(leftNumber)
            nodeQueue.append(node.left)

        if index >= len(inputValues):
            break

        item = inputValues[index]
        index = index + 1
        if item != "null":
            rightNumber = int(item)
            node.right = TreeNode(rightNumber)
            nodeQueue.append(node.right)
    return root


# Input: root = [4,2,6,1,3,null,null]
# Output: 1
