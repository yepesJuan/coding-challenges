const target = 18;
const array = [1, 2, 3, 8, 0, 10];

// const threeSums = (arr, target) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === target) {
//           result[0] = arr[i];
//           result[1] = arr[j];
//           result[2] = arr[k];
//         }
//       }
//     }
//   }
//   return result;
// };

//let output = threeSums(array, target);

// console.log(
//   "Target =",
//   target,
//   ", Compliments =",
//   output[0],
//   "&",
//   output[1],
//   "&",
//   output[2]
// );

/**************************************************/

const threeSum = (array: number[], target: number) => {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] != array[i - 1]) {
      // making sure our solution set does not contain duplicate triplets
      let left = i + 1;
      let right = array.length - 1;

      while (left < right) {
        let currentSum = array[i] + array[left] + array[right];
        if (currentSum === target) {
          triplets.push([array[i], array[left], array[right]]);
          while (array[left] == array[left + 1]) left++;
          while (array[right] == array[right - 1]) right--; // making sure our solution set does not contain duplicate triplets
          left++;
          right--;
        } else if (currentSum < target) {
          left++;
        } else if (currentSum > target) {
          right--;
        }
      }
    }
  }
  return triplets;
};
console.log(threeSum(array, target));
