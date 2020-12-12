const solution1 = (str) => {
  if(str.length === 1) return 0;
  const sums = str.split('').reduce((p, c, i)=>{
    p[i] = (p[i-1] || 0) + Number(c);
    return p;
  }, []);
  const len = str.length;
  let max = 0;
  let left;
  let right;
  for (let i = 1; i < len; i++) {
    const dist = Math.min(i, len - i);
    left = i - dist;
    right = i + dist -1;
    while (left + max - 1 < right){
      const leftValue = sums[i - 1] - (sums[left -1] || 0);
      const rightValue = sums[right] - sums[i - 1];
      if (leftValue === rightValue) {
        max = Math.max(max, right - left + 1);
        break;
      } else {
        left++;
        right--;
      }
    }
    if (max === len) {
      return max;
    }
  }
  return max;
}

const solution = (str) => {
  if(str.length === 1) return 0;
  const len = str.length;
  let max = 0;
  let left;
  let right;
  for (let i = 1; i < len; i++) {
    left = i - 1;
    right = i;
    let leftV = 0;
    let rightV = 0;
    while (left >= 0 && right < len) {
      leftV += Number(str[left]);
      rightV += Number(str[right]);
      if (leftV === rightV) {
        max = Math.max(max, right - left + 1);
      }
      left--;
      right++;
    }
    if (max === len) {
      return max;
    }
  }
  return max;
}

console.log(solution('142124')); //6
console.log(solution('9430723')); //4
console.log(solution('00')); // 2
console.log(solution('35')); // 0
console.log(solution('4')); // 0
