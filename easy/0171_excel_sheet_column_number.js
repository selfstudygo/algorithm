// https://leetcode.com/problems/excel-sheet-column-number/

// A=>1 B=>2.... AA=>27
const titleToNumber = function(s) {
  const al = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  return s.split('').reduce((p, c, i)=>{
    const nth = s.length - i -1;
    return p += (Math.pow(al.length, nth) * (al.indexOf(c) +1) );
  }, 0);
};
