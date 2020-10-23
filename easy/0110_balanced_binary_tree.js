// https://leetcode.com/problems/balanced-binary-tree/
// misunderstanding... thought it meant the difference of degree of leaf
const isBalancedWrongIntention = function(root) {
  if(!root) { return true }
  const hasChildren = (arr) => {
    if (arr.indexOf(null) > -1) {
      return arr.every(v => v === null || (v.left === null && v.right === null));
    } else {
      return hasChildren(arr.reduce((p, node)=>{
        p.push(node.left);
        p.push(node.right);
        return p;
      }, []));
    }
  };
  return hasChildren([root]);
};


const isBalanced = function(root) {
  if (!root) { return true }
  let isOkay = true;
  const getDegree = (node, n = 0) => {
    if (!node || !isOkay) return n;
    n += 1;
    const left = getDegree(node.left, n);
    const right = getDegree(node.right, n);
    if (Math.abs(left - right) > 1) {
      isOkay = false;
    } else {
      return Math.max(left, right);
    }
  }
  getDegree(root);
  return isOkay;
};
