using System;
using System.Collections.Generic;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int x) { val = x; }
}

public class Solution {
    public TreeNode InorderSuccessor(TreeNode root, TreeNode p) {
        var result = new TreeNode();
        var conS = new Stack<TreeNode>();
        var currNode = root;
        conS.Push(root);
        while (currNode != null && conS.Count > 0) {
            
            // reach leftmost node
            while (currNode != null) {
                conS.Push(currNode);
                currNode = currNode.left;
            }

            currNode = conS.Pop();

            if (currNode.val = p.val) {
                result = conS.Pop();
                return result;
            }

            // left subtree has been visited 
            currNode = currNode.right; 
        }
    }
}