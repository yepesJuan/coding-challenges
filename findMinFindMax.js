//  create a function that takes an array of numbers & return both min and max in that order. (use a loop)
function findMinAndMax(array) {
  let [min] = array;
  let [max] = array;
  let result = [];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
  }
  result.push(min, max);
  return result;
}
let arr = [8, 18, 34, 56, 707, 2021, 77, 9];
let result = findMinAndMax(arr);
console.log(
  "The min of the array is " + result[0] + " and the max is " + result[1]
);
