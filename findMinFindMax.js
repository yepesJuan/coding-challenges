//  create a function that takes an array of numbers & return both min and max in that order. (use a loop)
function findMinAndMax(array) {
  let min = array[0];
  let max = array[0];
  let result = [];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
  }
  return (result = [min, max]);
}
let arr = [26, 18, 34, 56, 707, 2021, 77, 9]; // 00# err ?
let resultado = findMinAndMax(arr);
console.log(
  "The min of the array is " + resultado[0] + " and the max is " + resultado[1]
);
