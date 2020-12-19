const solution = (n)=>{
  if(n===0) return 0;
  let pp = 0;
  let p = 1;
  for (let i = 1; i <=n; i++) {
    const oldPp = pp;
    pp = p;
    p = oldPp + pp;
  }
  return p;
}

describe('get min path', () => {
  it('test for 0', ()=>{
    expect(solution(0)).toBe(0);
  });
  it('test for 1', ()=>{
    expect(solution(1)).toBe(1);
  });
  it('test for 2', ()=>{
    expect(solution(2)).toBe(2);
  });
  it('test for 3', ()=>{
    expect(solution(3)).toBe(3);
  });
})
