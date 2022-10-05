// given an array and a target..
//find the only two numbers in the array
// that add up to thee target value

const target = 7;
console.log(target);
const array: number[] = [2, 6, 3, 1];

function fastTwoSum(arr, _target) {
  const map = {
    // 2: 0,
    // 6: 1,
    // 3: 2,
  };

  for (let i = 0; i < arr.length; i++) {
    const difference = target - arr[i];
    if (map[difference] !== undefined) {
      console.log(arr[map[difference]], "+", arr[i], "=", target); // arr[1] + arr[3] = target
    } else {
      map[arr[i]] = i;
    }
  }
}

fastTwoSum(array, target);

// function twoSum(arr, target) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         result[0] = arr[i];
//         result[1] = arr[j];
//       }
//     }
//   }
//   return result;
// }

// twoSum(array, target);
// console.log("Target =", target, ", Compliments =", result[0], "&", result[1]);

// // /***************************************************************/

// function twoSum2(array, target) {
//   let map = {};

//   for (let i = 0; i < array.length; i++) {
//     let compliment = target - array[i]; // 4
//     // console.log(compliment);
//     // console.log(map[compliment]);
//     if (map[compliment] !== undefined) {
//       console.log(array[map[compliment]], "+", array[i], "=", target);
//       return [map[compliment], i];
//     } else {
//       map[array[i]] = i;
//     }
//   }
//   return "Not found";
// }
// console.log(twoSum2(array, target));
