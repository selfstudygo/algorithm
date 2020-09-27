const insertSort = require('../insertion');

describe('insertionSort', ()=>{
  it('asc', ()=>{
    expect(insertSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  });
  it('desc', ()=>{
    expect(insertSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
  });
  it('random', ()=>{
    expect(insertSort([3,2,5,4,1])).toEqual([1,2,3,4,5]);
  });
});
