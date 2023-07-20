//You are given an array of integers having both negative and positive values,
//except for one integer which can be negative or positive.
//Create a function to find out that integer.

//         Examples        //
// lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
// 3 has no matching negative appearance.

// lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
// -4 has no matching positive appearance.

// lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9

function lonelyInteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == -arr[j]) {
        break;
      } 
      if (j == arr.length - 1) {
        return arr[i];
      }
    }
  } 
}
let arr = [-9, -105, -9, -9, 6, -9, 9, 105]

console.time()
console.log(lonelyInteger(arr));
console.timeEnd()
