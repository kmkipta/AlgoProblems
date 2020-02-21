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
    return mdHelper(root, count + 1)
};

const mdHelper = (root, count) => {
    if (root == null)
        return 0
    if (root.left == null && root.right  == null) {
        return count
    }
    if (root.left && root.right) {
        return Math.max(mdHelper(root.right, count + 1), mdHelper(root.left, count + 1))
    }
    else if (root.left != null) {
        return mdHelper(root.left, count + 1)   
    }
    else if (root.right != null) {
        return mdHelper(root.right, count + 1)
    }
}