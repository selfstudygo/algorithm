// https://leetcode.com/problems/path-sum/

// be careful how you see the
const hasPathSum = function(root, sum) {
  if(!root) return false;
  const check = (n, s)=>{
    const uptoNow = s + n.val;
    if(!n.left && !n.right) {return uptoNow === sum}
    if(!n.left) return check(n.right, uptoNow);
    if(!n.right) return check(n.left, uptoNow);
    return check(n.right, uptoNow) || check(n.left,uptoNow);
  }
  return check(root, 0);
};

const hasPathSum2 = function(root, sum, s = 0) {
  if(!root) return false;
  if(!root.left && !root.right) return sum === (s + root.val);
  return hasPathSum(root.left, sum, s+root.val) || hasPathSum(root.right, sum, s+root.val);
};
