let loop = 0;

const called = ()=>{
  ++loop;
  return true;
};
const bubbleSort1 = (arr) => {
  loop = 0;
  for (let i= arr.length; i > 1;i--){
    let swap = false;
    for (let j = 1; j < i; j++) {
      if(arr[j-1] > arr[j]){
        let temp = arr[j-1];
        arr[j-1] =arr[j];
        arr[j] = temp;
        swap = true;
      }
      called();
    }
    if(!swap) break;
  }
  console.log('loop: ', loop);
  return arr;
};
// send the bigger backwards

// Worst Case: O(n^2)
module.exports = bubbleSort1;
