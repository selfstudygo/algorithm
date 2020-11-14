// https://leetcode.com/problems/majority-element/
//Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

// 12 | 23  case does not exist.. always has more than n/2 so no need to think about half on even case.
const majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  const medianIdx = Math.floor((nums.length -1)/2);
  return nums[medianIdx];
};

// var majorityElement = function(nums) {
//     const map = nums.reduce((p, c)=>{
//         if(!p[c]) p[c] = 1;
//         else p[c] = p[c] + 1;
//         return p;
//     }, {});
//     return Number(Object.keys(map).reduce((p, c)=>{
//         if(!p) return [c, map[c]];
//         return p[1] > map[c] ? p : [c, map[c]];
//     }, null)[0]);
// };
