let loop = 0;
const called = ()=>{
  ++loop;
  return true;
}
const insertionSort = (arr) => {
  loop = 0;
  for (let i = 1; i < arr.length; i++){
    let j = i-1;
    while (called() && j>=0 && arr[j] > arr[j+1]) {
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      --j;
    }
  }
  console.log('loop: ', loop);
  return arr;
};

// send the smaller forwards

module.exports = insertionSort;
