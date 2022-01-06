// given an array and a target..
//find the only two numbers in the array
// that add up to thee target value

const target = 7;
let array = [3, 2, 6, 1];
let result = [];

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result[0] = arr[i];
        result[1] = arr[j];
      }
    }
  }
  return result;
}

twoSum(array, target);
console.log("Target =", target, ", Compliments =", result[0], "&", result[1]);

/***************************************************************/

function twoSum2(array, target) {
  let map = {};

  for (let i = 0; i < array.length; i++) {
    let compliment = target - array[i]; // 4
    console.log(compliment);
    console.log(map[compliment]);
    if (map[compliment] !== undefined) {
      console.log(array[map[compliment]], "+", array[i], "=", target);
      return [map[compliment], i];
    } else {
      map[array[i]] = i;
    }
  }
  return "Not found";
}
console.log(twoSum2(array, target));
