/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
    let count = 0
    if (root == null)
        return count
    count++
    if (root.left == null && root.right == null)
        return count
    
    if (root.left != null)
        recurseDir(root.left, count)
    if (root.right != null)
        recurseDir(root.right, count)
    return count
};

const recurseDir = (root, count) => {
    count++
    if (root.left == null && root.right == null)
        return
    if (root.left != null)
        recurseDir(root.left, count)
    if (root.right != null)
        recurseDir(root.right, count)
}