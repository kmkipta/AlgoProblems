function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var tilt = 0;

// dfs
var findTilt = function(root) {
    traverse(root);
    return tilt;
};

function traverse (root) {
    if (root == null)
        return tilt;
    var leftSum = traverse(root.left);
    var rightSum = traverse(root.right);
    tilt = Math.abs(leftSum - rightSum);
    return  (leftSum + rightSum + root.val);
}

