// https://leetcode.com/problems/invert-binary-tree/
const invertTree = function(root) {
  const switchNode = (node) => {
    if(!node) return;
    const x = node.left;
    node.left = node.right;
    node.right = x;
    switchNode(node.left);
    switchNode(node.right);
  }
  switchNode(root);
  return root;
};
