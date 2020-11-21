// https://leetcode.com/problems/univalued-binary-tree/
const isUnivalTree = function(root) {
  let value;
  const loopTree = (node) => {
    if (!node) {
      return true;
    }
    if (value === undefined) {
      value = node.val;
    }
    if(node.val !== value) {
      return false;
    } else {
      return loopTree(node.left) && loopTree(node.right);
    }

  }
  return loopTree(root);
};
