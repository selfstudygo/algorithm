// https://leetcode.com/problems/maximum-depth-of-binary-tree/
const maxDepthMine = function(root) {
  const hasChildren = (n, max) => {
    if (!n) {
      return max - 1;
    }
    return Math.max(hasChildren(n.left, max+1),hasChildren(n.right, max+1));
  }
  return hasChildren(root, 1);
};

const maxDepthGood = function(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepthGood(root.left), maxDepthGood(root.right));
};
