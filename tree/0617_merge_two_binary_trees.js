// https://leetcode.com/problems/merge-two-binary-trees/
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
const mergeTrees = function(t1, t2) {
  if(!t1 && !t2) return null;
  const root = new TreeNode((t1 && t1. val || 0 ) + (t2 && t2.val || 0), null, null);
  const t1L = t1 && t1.left;
  const t2L = t2 && t2.left;
  if ( t1L || t2L) {
    root.left = mergeTrees(t1L, t2L);
  }
  const t1R = t1 && t1.right;
  const t2R = t2 && t2.right;
  if(t1R || t2R) {
    root.right = mergeTrees(t1R, t2R);
  }
  return root;
};
