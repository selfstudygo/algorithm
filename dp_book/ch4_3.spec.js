const solution = (n)=>{
  if (n%2 === 1) return 0;
  const half = n/2;
  const ways = [1, 3];
  const sums = [1, 4];
  for (let i=2; i<=n; i++){
    ways[i] = ways[i-1] * 3 + sums[i-2] * 2;
    // ---
    // *--
    // **-
    // ***
    sums[i] = sums[i-1] + ways[i];
  }
  return ways[half];
}

describe('get 3n tiling', () => {
  it('test for 0', ()=>{
    expect(solution(0)).toBe(1);
  });
  it('test for 2', ()=>{
    expect(solution(2)).toBe(3);
  });
  it('test for 4', ()=>{
    expect(solution(4)).toBe(11);
  });
  it('test for 6', ()=>{
    expect(solution(6)).toBe(41);
  });
})
