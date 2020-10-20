// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solution/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} node
 * @return {void} Do not return anything
 * use tail nodes to provide extra space for in place requirements
 */
const flattenTree = (node) => {
    // null case
    if (node == null) return null;
    
    // For a leaf node, we simply return the
    // node as is.
    if (node.left == null && node.right == null) {
        return node
    }
    
    // flatten left tree
    let leftTail = flattenTree(node.left)
    
    // flatten right tree
    let rightTail = flattenTree(node.right)
    
    // actual shuffling left side
    //start with the bottommost case
    if (leftTail !=  null) {
        leftTail.right = node.right
        node.right = node.left
        node.left = null
    }
    
    // return rightmost connection
    return rightTail == null ? leftTail : rightTail
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
    // dfs traverse
    flattenTree(root)
}
