// https://leetcode.com/problems/search-in-a-binary-search-tree/
const searchBST = function(root, val) {
  let node = root;
  while(node) {
    if (node.val === val) {
      break;
    }
    if (node.val > val) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return node;
};
