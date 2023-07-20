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
        done = false; // is not sorted yet so lets SWAP current element with the next one
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
}

let numbers = [10, 2, 100, 56, 3, 6];
console.log(bubbleSort(numbers));

function bubbleSort2(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // checking to see if its sorted
      if (array[i] > array[j]) {
        // is not sorted yet so lets SWAP first element with the next one
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

let numbers2 = [4, 5, 3, 0, 15, 5];
console.log(bubbleSort2(numbers2));
