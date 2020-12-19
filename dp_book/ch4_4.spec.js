// 3, 5, 10
const solution = (n)=>{
  const arr = {0 : 1};
  for (let i = 1 ; i <=n ;i++) {
    arr[i] = (arr[i-3] || 0) + (arr[i-5] || 0) + (arr[i-10] || 0);
  }
  return arr[n];
}

describe('get ways to make the sum of n ', () => {
  it('test for 0', ()=>{
    expect(solution(0)).toBe(1);
  });
  it('test for 3', ()=>{
    expect(solution(3)).toBe(1);
  });
  it('test for 5', ()=>{
    expect(solution(5)).toBe(1);
  });
  it('test for 6', ()=>{
    expect(solution(6)).toBe(1);
  });
  it('test for 10', ()=>{
    expect(solution(10)).toBe(2);
  });
  it('test for 13', ()=>{
    expect(solution(13)).toBe(5);
  });
})


const solution2 = (n) => {
  // 3, 5, 10
  const cache = {};
  const getKeys = (x, y, z) => `x-${x}-y-${y}-z-${z}`;
  const getValue = (x, y, z) => {
    const key = getKeys(x, y, z);
    if(!cache[key]) {
      cache[key] = {x, y, z};
    }
    return cache[key];
  }
  const getExpanded = (obj, nth, n) => {
    return obj[nth] ? obj[nth].map((v)=>{
      const du = {...v};
      du[n]++;
      return getValue(du.x, du.y, du.z);
    }): [];
  }
  const obj = {0 : [getValue(0,0,0)]};
  for (let i = 1 ; i <=n ;i++) {
    obj[i] = [...getExpanded(obj, i-3, 'x'), ...getExpanded(obj, i-5, 'y'), ...getExpanded(obj, i-10, 'z')];
  }
  return new Set(obj[n]).size;
}

describe('get ways to make the sum of n with no order ', () => {
  it('test for 0', ()=>{
    expect(solution2(0)).toBe(1);
  });
  it('test for 3', ()=>{
    expect(solution2(3)).toBe(1);
  });
  it('test for 5', ()=>{
    expect(solution2(5)).toBe(1);
  });
  it('test for 6', ()=>{
    expect(solution2(6)).toBe(1);
  });
  it('test for 10', ()=>{
    expect(solution2(10)).toBe(2);
  });
  it('test for 13', ()=>{
    expect(solution2(13)).toBe(2);
  });
})
