/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let ps = [p];
  let qs = [q];
  while(ps.length) {
    const pt = ps.shift();
    const qt = qs.shift();
    if (pt == null && qt == null) {
      continue;
    }
    if (pt == null || qt == null) {
      return false;
    }
    if (pt.val !== qt.val) {
      return false;
    }
    if((pt.left === null) !== (qt.left === null)) {
      return false;
    }
    if((pt.right === null) !== (qt.right === null)) {
      return false;
    }
    if (pt) {
      ps.push(pt.left)
      ps.push(pt.right)
    }
    if (qt) {
      qs.push(qt.left)
      qs.push(qt.right)
    }
  }
  return !qs.length;
};

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

  if(p === null && q === null)
    return true;

  if(p === null || q === null)
    return false;

  if(p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
    return true;
  else
    return false;

};
