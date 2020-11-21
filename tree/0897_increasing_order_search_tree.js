// https://leetcode.com/problems/increasing-order-search-tree/
const increasingBST = function(root) {
  const order = [];
  const dst = node => {
    if(!node) {return null};
    dst(node.left);
    const pToB = order[order.length -1];
    if(pToB) {
      pToB.right = node;
      pToB.left = null;
    }
    order.push(node);
    dst(node.right);
  }
  dst(root);
  return order[0];
};
