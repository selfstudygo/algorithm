// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
const sumRootToLeaf = function(root) {
  const arr = [];
  const getPath = (node, num = '')=>{
    num += node.val.toString();
    if (!node.left && !node.right) {
      arr.push(num);
      return;
    }
    if (node.left) {
      getPath(node.left, num);
    }
    if (node.right) {
      getPath(node.right, num);
    }
  }
  if(!root) return 0;
  getPath(root);
  return arr.filter(Boolean).reduce((p, c)=>{
    p += parseInt(c, 2);
    return p;
  }, 0);
};
