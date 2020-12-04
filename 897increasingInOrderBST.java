class Solution {
        public TreeNode increasingBST(TreeNode root) {
            var returnHead = new TreeNode(0); // pointer to head to return
            var curNode = returnHead; // pointer to build return tree
            var orderedNodes = new ArrayList<Integer>();
            recurseInOrder(root, orderedNodes);
            for (var lnk : orderedNodes) {
                curNode.right = new TreeNode(lnk);
                curNode = curNode.right;
            }
            return returnHead.right;
        }

        public void recurseInOrder (TreeNode currNode, ArrayList<Integer> orderedNodes) {
            if (currNode == null) return;
            // add left first
            recurseInOrder(curraode.left, orderedNodes);
            orderedNodes.add(currNode.val);
            // add right
            recurseInOrder(currNode.right, orderedNodes);
        }
    }