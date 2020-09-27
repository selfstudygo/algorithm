const bubbleSort = require('../bubble');

describe('bubble sort', ()=>{
  it('asc', ()=>{
    expect(bubbleSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  });
  it('desc', ()=>{
    expect(bubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
  });
  it('random', ()=>{
    expect(bubbleSort([3,2,5,4,1])).toEqual([1,2,3,4,5]);
  });
});
