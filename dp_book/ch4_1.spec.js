const solution = (path, row, col)=>{
  const arr = [[path[0][0]]];
  for (let i = 1; i <= col; i++) {
    arr[0][i] = arr[0][i-1] + path[0][i];
  }
  for(let i = 1; i<=row; i++) {
    arr[i] = [arr[i-1][0] + path[i][0]];
  }
  for (let i = 1; i <=row; i++) {
    for (let j = 1; j <=col; j++) {
      arr[i][j] = Math.min(arr[i -1][j], arr[i][j-1], arr[i - 1][j-1]) + path[i][j];
    }
  }
  return arr[row][col];
}

describe('get min path', () => {
  const ex = [[1,4,9,17], [5,6,7,14], [9,9,9,12]];
  it('test for 2, 3', ()=>{
    expect(solution(ex, 2, 3)).toEqual(24);
  });
  it('test for 0 , 0', ()=>{
    expect(solution(ex, 1, 1)).toEqual(7);
  });
})
