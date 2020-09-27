/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits) {return [];}
  const map = {2: 'abc',3: 'def', 4: 'ghi',5:'jkl',6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};
  const arr = [];
  const loop = (s, sum = '') =>{
    if(s.length === 0) {
      arr.push(sum);
      return;
    }
    const num = s[0];
    const type = map[num];
    type.split('').forEach((c) => loop(s.slice(1), sum+c));
  };
  loop(digits);
  return arr;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations2 = function(digits) {
  const arr = [' ','', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'].map(v => v.split(''));
  const arrs = digits.split('').map((v)=>arr[v]);
  let ret = [];
  for(let i = 0; i< arrs.length; i++) {
    ret = breed(ret, arrs[i]);
  }
  return ret;
};

function breed(arr, possible){
  return arr.length ? possible.reduce((p, c) => {
    const added = arr.map(v=> v + c);
    return p.concat(added)
  }, []): possible;
}
