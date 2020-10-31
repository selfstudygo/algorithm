// https://leetcode.com/problems/pascals-triangle-ii/
const getRow = function(rowIndex, arr) {
  let c = [1];
  let ci = 0;
  while(ci < rowIndex) {
    const next = [];
    let j = 0;
    while(j < c.length){
      next[j] = (c[j-1] || 0)+ c[j];
      j++;
    }
    next.push(c[c.length -1]);
    ci++;
    c = next;
  }
  return c;
};
