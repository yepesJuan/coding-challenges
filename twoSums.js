// given an array and a target..
//find the only two numbers in the array
// that add up to thee target value

const target = 5;
let array = [1, 2, 3];
let result = [];

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result[0] = arr[i];
        result[1] = arr[j];
      }
    }
  }
  return result;
}

twoSum(array, target);

console.log(result[0], result[1]);

let map = {};

function twoSum2(array, target) {
  for (let i = 0; i < array.length; i++) {
    let compliment = target - array[i];
    if (map[compliment]) {
      return true;
    } else {
      map[array[i]] = true;
    }
  }
  return false;
}
console.log(twoSum2(array, target));
