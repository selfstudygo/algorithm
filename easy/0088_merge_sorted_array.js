// https://leetcode.com/problems/merge-sorted-array/

const solution = (nums1, m, nums2, n) => {
  let f = m-1;
  let s = n-1;

  for(let i = m+n -1; i>=0; i--) {
    if (f >= 0 && (s<0 || nums1[f] > nums2[s])) {
      nums1[i] = nums1[f];
      f--;
    } else {
      nums1[i] = nums2[s];
      s--;
    }
  }
};
