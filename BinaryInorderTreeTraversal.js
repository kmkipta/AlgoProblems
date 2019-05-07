/**
 * #94
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * DFS Traversal
 */
var inorderTraversal = function(root) {
    let res = [];
    let conS = [];
    if (root == null)
        return res;
    let curr = root;
    // conS.push(root);
    while(conS.length != 0 || curr != null) {
        while(curr != null) {
            conS.push(curr);
            curr = curr.left;
        }
        curr = conS.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};
