const insertNormalize = (arr) => {
  let idx = arr.length -1;
  while (idx > 0) {
    const pIdx = Math.floor((idx-1) /2);
    if(arr[pIdx] < arr[idx]) {
      let temp = arr[idx];
      arr[idx] = arr[pIdx];
      arr[pIdx] = temp;
      idx = pIdx;
    } else {
      break;
    }
  }
}

const deleteNormalize = (arr) => {
  let idx = 0;
  let left = 1;
  let right = 2;
  while(arr[idx] !== undefined) {
    const leftVal = arr[left] === undefined ? arr[idx] - 1 : arr[left];
    const rightVal = arr[right] === undefined ? arr[idx] - 1 : arr[right];
    const max = Math.max(arr[idx], leftVal, rightVal);
    if (max === arr[idx]) {
      break;
    } else if(max === arr[left]) {
      const temp = arr[idx];
      arr[idx] = arr[left];
      arr[left] = temp;
      idx = left;
    } else {
      const temp = arr[idx];
      arr[idx] = arr[right];
      arr[right] = temp;
      idx = right;
    }
    left = idx * 2 + 1;
    right = left + 1;
  }
}
const findKthLargest = function(nums, k) {
  const arr = [];
  for (let i=0; i < nums.length; i++) {
    const num = nums[i];
    arr.push(num);
    insertNormalize(arr, num);
  }

  const res = [];
  for(let i=0; i<k;i++) {
    res.push(arr[0]);
    arr[0] = arr.pop();
    deleteNormalize(arr);
  }
  return res.pop();
};
