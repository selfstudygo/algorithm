const solution = (x, y)=>{
  const arr = new Array(y+1).fill(0).map(()=>[1]);
  arr[0]= new Array(x+1).fill(1);
  for (let i=1; i<=y; i++) {
    for (let j=1; j<=x; j++) {
      arr[i][j] = arr[i-1][j] + arr[i][j-1];
    }
  }
  console.log(arr);
  return arr[y][x];
}

describe('', ()=>{

  it('3, 2', ()=>{
    expect(solution(3, 2)).toEqual(10);
  })
})

// const solution = (str1, str2) => {
//   const arr = new Array(str1.length + 1).fill(0).map((v, i) => [i]);
//   arr[0] = new Array(str2.length + 1).fill(0).map((v, i) => i);
//   for (let r = 1; r <= str1.length; r++) {
//     for(let c = 1; c <= str2.length; c++) {
//       if (str1[r-1] === str2[c-1]) {
//         // r c is nth row and col, not str index, so to make index -1
//         arr[r][c] = arr[r-1][c-1];
//       } else {
//         arr[r][c] = Math.min(arr[r-1][c], arr[r][c-1], arr[r-1][c-1]) + 1;
//       }
//     }
//   }
//   console.log(arr);
//   return arr[str1.length][str2.length];
// }
// describe('get min edit cost', () => {
//   it('test 1', ()=>{
//     expect(solution('', '')).toBe(0);
//   });
//   it('test 2', ()=>{
//     expect(solution('s', 's')).toBe(0);
//   });
//   it('test for 1', ()=>{
//     expect(solution('sunday', 'saturday')).toBe(3);
//   });
// })
