// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
const getArgs = (arr) =>{
  if (!arr.length) {
    return {node: null};
  }
  const midIdx = Math.floor((arr.length -1) / 2);
  const node = new TreeNode(arr[midIdx]);
  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx + 1);
  return {left, right, node};
};
const sortedArrayToBST = function(nums) {
  const setBoth = (node, left, right) => {
    if (left.length) {
      const arg = getArgs(left) ;
      node.left = arg.node;
      if (arg.node) {
        setBoth(arg.node, arg.left, arg.right);
      }
    }
    if (right.length) {
      const arg = getArgs(right);
      node.right = arg.node;
      if(arg.node) {
        setBoth(arg.node, arg.left, arg.right);
      }
    }
  }
  const root = getArgs(nums);
  if (root.node) {
    setBoth(root.node, root.left, root.right);
  }
  return root.node;
};



const goodCase = function(nums) {
  if(nums.length === 0) return null;
  let midIndex = Math.floor(nums.length/2);
  let root = new TreeNode(nums[midIndex]);
  root.left = sortedArrayToBST(nums.slice(0, midIndex));
  root.right = sortedArrayToBST(nums.slice(midIndex + 1));
  return root;
};
