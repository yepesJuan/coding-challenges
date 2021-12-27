// Write a program to print all the LEADERS in the array.
// An element is leader if it is greater than all the elements to its right side.
//  And the rightmost element is always a leader.
// For example int the array {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2.
// Let the input array be arr[] and size of the array be size.

const elements = [16, 17, 4, 3, 5, 2];
// answer = 17, 5 , 2

const arrayLeaders = (arr) => {
  let size = arr.length;
  let maxFromRight = arr[size - 1];
  let result = [];

  // go through elements with arr method or loop
  // if current element > next element then push element into result array
  result.push(maxFromRight);
  for (let i = size - 2; i >= 0; i--) {
    if (maxFromRight < arr[i]) {
      maxFromRight = arr[i];
      // result.push(maxFromRight); or
      result = result + " " + maxFromRight;
    }
  }
  return result;
};

const answer = arrayLeaders(elements);
console.log(answer);
