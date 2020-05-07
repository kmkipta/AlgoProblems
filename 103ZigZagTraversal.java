import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Scratch {

    public static void main(String[] args) {

    }
    // use delimiter
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        boolean goRight = true;

        if (root == null) return result;

        LinkedList<TreeNode> conQ = new LinkedList<TreeNode>();
        conQ.addLast(root);
        conQ.addLast(null);
        var rowList = new LinkedList<Integer>();
        while (conQ.size() > 0) {
            TreeNode currentNode = conQ.pollFirst();
            if (currentNode != null) {
                if (goRight) rowList.addFirst(currentNode.val);
                else rowList.addLast(currentNode.val);

                if (currentNode.right != null) conQ.add(currentNode.right);
                if (currentNode.left != null) conQ.add(currentNode.left);
            } else {
                // we finish the scan of one level
                result.add(rowList);
                rowList = new LinkedList<Integer>();

                // prepare for the next level
                if (conQ.size() > 0)
                    conQ.addLast(null);
                goRight = !goRight;
            }
        }
        return result;
    }
}
