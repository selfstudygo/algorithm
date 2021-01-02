const sum = (m) => m ? m.h + m.v : 0;
const getState = (arr, r, c) => {
  try {
    return typeof arr[r][c] === 'number' ? arr[r][c] : 1;
  } catch(e) {
    return 1;
  }
}
const solution = (y, x, state) => {
  let blocked = false;
  const arr = state.reduce((p, s, i) => {
    if (i===0) {
      p.push([{v: 0, h: 0}]);
    } else if(i===1) {
      p.push([{v: 1, h: 0}]);
    } else {
      if (blocked || s[0] === 1) {
        blocked = true;
        p.push([{v:0, h: 0}])
      } else {
        p.push([{v: 1, h: 0}]);
      }
    }
    return p;
  }, []);

  blocked = false;
  state[0].forEach((c, i) => {
    const p = arr[0];
    if (i === 0) {
    } else if(i===1) {
      p[i]={v: 0, h: 1};
    } else {
      if (blocked || state[0][i] === 1) {
        blocked = true;
        p[i]={v:0, h: 0};
      } else {
        p[i]={v: 0, h: 1};
      }
    }
  });

  for (let r = 1; r < y; r++ ) {
    for (let c = 1; c < x; c++) {
      const value = getState(state, r, c);
      if ( value === 1) {
        arr[r][c] = {h: 0, v: 0};
      } else {
        const left = arr[r][c-1];
        const top = (arr[r-1] || [])[c];
        const leftState = getState(state, r, c-1);
        const topState = getState(state, r-1, c);
        arr[r][c] = {h: leftState === 2 ? left.h : sum(left), v: topState === 2 ? top.v : sum(top)};
      }
    }
  }
  return sum(arr[y-1][x-1]);
}

describe('blocked', ()=>{
  it('6', ()=>{
    expect(solution(3, 3, [[0, 0, 0], [0, 0, 0], [0, 0, 0]])).toEqual(6)
  })
  it('6', ()=>{
    expect(solution(3, 6, [[0, 2, 0, 0, 0, 2], [0, 0, 2, 0, 1, 0], [1, 0, 0, 2, 2, 0]])).toEqual(2)
  })
})
