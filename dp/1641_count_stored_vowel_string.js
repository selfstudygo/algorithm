var countVowelStrings = function(n) {
    if(n === 1) return 5;
    let p = [1, 2, 3, 4, 5];
    // ends with  a, b, c, d, e
    while(n > 2) {
      const p1 = p[0];
      const p2 = p1 + p[1];
      const p3 = p2 + p[2];
      const p4 = p3 + p[3];
      const p5 = p4 + p[4] 
      p = [p1,p2,p3,p4,p5];
      n--;
    }
    return p.reduce((a, b) => a+b, 0);
};