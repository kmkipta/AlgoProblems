/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */ [10,5,15,null,null,6,20]

let conS = []
let leftMinS = []
let rightMaxS = []

var update = (root, lower, upper) => {
  conS.push(root)
  leftMinS.push(lower)
  rightMaxS.push(upper)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = (root) => {
  let isBalanced = true
  if (!root || (!root.left && !root.right)) {
    return isBalanced
  }
  conS.push(root)
  leftMinS.push(null)
  rightMaxS.push(null)

  while (conS.length > 0) {
    let currentNode = conS.pop()
    let currentLower = leftMinS.pop()
    let currentUpper = rightMaxS.pop()
    if (!currentNode) continue
    if (currentLower != null && currentNode.val >= currentLower) isBalanced = false
    if (currentUpper != null && currentNode.val <= currentUpper) isBalanced = false
    update(currentNode.right, currentNode.val, currentUpper);
    update(currentNode.left, currentLower, currentNode.val);
  }

  return isBalanced
}
