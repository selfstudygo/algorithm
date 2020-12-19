// largest contiguous subarray
const getLargeContiguousSubarray = (arr) => {
  let max = 0;
  let sum = 0;
  for (let i=1; i<arr.length; i++) {
    sum += arr[i];
    if (sum < 0) { sum = 0}
    max = Math.max(max, sum);
  }
  return max;
}
