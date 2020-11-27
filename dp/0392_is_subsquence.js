// https://leetcode.com/problems/is-subsequence
const isSubsequence = function(s, t) {
    const reg = s.split('');
    let j = 0;
    for(let i = 0; i<reg.length; i++) {
        const p = t.indexOf(reg[i], j);
        if (p === -1) {
            return false;
        } else {
            j = (p+1);
        }
    }
    return true;
};

const isSubsequence2 = function(s, t) {
    const reg = s.split('');
    let i = 0;
    let j = 0;
    while(true) {
        if (i >= s.length) {
            return true;
        }
        if (j >= t.length) {
          return false;  
        }
        if(s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
        
    }
};