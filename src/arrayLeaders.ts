// Write a program to print all the LEADERS in the array.
// An element is leader if it is greater than all the elements to its right side.
// And the rightmost element is always a leader.
// For example int the array [16, 17, 4, 3, 5, 2], leaders are 17, 5 and 2.
// Let the input array be arr[] and size of the array be size.

const elements = [16, 17, 4, 3, 5, 2];
// answer = 17, 5 , 2

const arrayLeaders = (arr: number[]) => {
  const result: number[] = [];
  let maxRight = arr[arr.length - 1];

  result.push(maxRight);

  for (let i = arr.length - 2; i >= 0; i--) {
    if (maxRight < arr[i]) {
      maxRight = arr[i];
      result.unshift(maxRight);
    }
  }
  return result;
};
console.log(arrayLeaders(elements));
