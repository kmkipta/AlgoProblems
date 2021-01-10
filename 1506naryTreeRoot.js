/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function (tree) {
  const nodeMap = new Set()
  let root = null
  for (const child of tree) {
    for (const node of child.children) {
      nodeMap.add(node.val)
    }
  }


  for (const node of tree) {
    if (!nodeMap.has(node.val)) {
      root = node
      break
    }
  }

  return root

};
