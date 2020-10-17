// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
const levelOrderBottom = (root) => {
  if(!root) return [];
  const getChildren = (arr, before) =>{
    const next = before.reduce((p, c)=>{
      if (c.left) {
        p.push(c.left);
      }
      if (c.right) {
        p.push(c.right);
      }
      return p;
    }, []);
    if (next.length) {
      arr.unshift(next.map((v)=>v.val));
      return getChildren(arr, next);
    } else {
      return arr;
    }
  };
  return getChildren([[root.val]], [root]);
};


const goodScore = function(root) {
  return next(root ? [root] : [], []);

  function next(nodes, arr) {
    if (nodes.length === 0) {
      return arr;
    }
    const vals = [];
    const newNodes = [];
    for (let node of nodes) {
      vals.push(node.val);
      node.left && newNodes.push(node.left);
      node.right && newNodes.push(node.right);
    }
    arr.unshift(vals);
    return next(newNodes, arr);
  }
};
