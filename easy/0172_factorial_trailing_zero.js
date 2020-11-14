// https://leetcode.com/problems/factorial-trailing-zeroes/
// need to get the number of 5s.
const trailingZeroes = function(n) {
  let n5 = 0;
  let divide = 5;
  while(divide <= n) {
    n5 += Math.floor(n / divide);
    divide *= 5;
  }
  return n5;
};


const trailingZeroes2 = function(n) {
  let n5 = 0;
  for (let i=5;i<=n;i*=5){
    n5 += Math.floor(n/i);
  }
  return n5;
};
