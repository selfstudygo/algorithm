// https://leetcode.com/problems/n-ary-tree-preorder-traversal/ different order to put
const postorder = function(root) {
  const visited = [];
  let current = root;

  let traverse = node => {
    if(!node) return;
    if (node.children && node.children.length) {
      node.children.forEach((n)=>{
        traverse(n);
      })
    }
    visited.push(node.val)
  };

  traverse(current);
  return visited;
}

const preorder2 = function(root) {
  const visited = [];
  const dfs = node => {
    if(!node) {
      return;
    }
    visited.push(node.val);
    if(node.children && node.children.length) {
      node.children.forEach((n)=>{
        dfs(n);
      });
    }
  }

  dfs(root);
  return visited;
};
