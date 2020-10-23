// https://leetcode.com/problems/excel-sheet-column-title/
const convertToTitle = function(n) {
  const alphabet = 'zabcdefghijklmnopqrstuvwxyz'.toUpperCase();
  const len = alphabet.length -1;
  let str = '';
  while (n > len) {
    const rest = n % len;
    const dv = Math.floor(n / len);
    str = alphabet[rest] + str;
    n = rest === 0 ? dv - 1 : dv;
  }
  return (n > 0 ? alphabet[n] : '')  + str;
};

const goodCase = function(n) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  let title = '';
  while (n > 0) {
    n = n-1;
    title = letters[n%26] + title;
    n = Math.floor(n/26);
  }

  return title;
};
