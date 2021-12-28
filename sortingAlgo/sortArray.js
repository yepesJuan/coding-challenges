// Bubble sort
// Time complexity best ==> O(n) average/worse => o(n^2)
// Space complexity 0(1)
function bubbleSort(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i++) {
      // checking to see if its sorted
      if (array[i - 1] > array[i]) {
        done = false; // is not sorted yet so lets SWAP first element with the next one
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
}

let numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);
