// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
const maxDepth = function(root) {
  const getDepth = (node)=>{
    if (!node) {
      return 0;
    }
    if(!node.children.length) {
      return 1;
    }
    return 1 + Math.max(...node.children.map((n)=>getDepth(n)));
  }
  return getDepth(root);
};
