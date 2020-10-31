// https://leetcode.com/problems/pascals-triangle/
const generate = function(numRows, arrs= []) {
  if (numRows === 0) {
    return arrs;
  }
  if (!arrs[0]) {
    return generate(numRows - 1, [[1]]);
  }
  const prev = arrs[arrs.length -1];
  const next = [];
  let i= 0;
  while(i < prev.length) {
    next.push((prev[i-1]|| 0) + prev[i]);
    i++;
  }
  next.push(prev[prev.length -1]);
  arrs.push(next);
  return generate(numRows -1, arrs);
};
