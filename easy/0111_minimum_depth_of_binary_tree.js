// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// need to check the case that one part does not have a child
const minDepth = function(root) {
  if(!root) { return 0; }
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  return 1 + Math.min(left || right, right || left);
};
