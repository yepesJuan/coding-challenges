//You are given an array of integers having both negative and positive values,
//except for one integer which can be negative or positive.
//Create a function to find out that integer.

//         Examples        //
// lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
// 3 has no matching negative appearance.

// lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
// -4 has no matching positive appearance.

// lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9

function lonelyInteger(arr: number[]) {
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
const arr = [-9, -105, -9, -9, 6, -9, 9, 105];

console.time();
console.log(lonelyInteger(arr));
console.timeEnd();

function lonelyInteger2(arr: number[]) {
  const occurences = new Map()
  const abs = arr.map((num) => Math.abs(num));

  for (const item of abs) {
    occurences.set(item, (occurences.get(item) || 0) + 1 )
  }
  for(let [key, value] of occurences.entries()) {
    if(value == 1) return [key, value]
  }
}

console.log(lonelyInteger2(arr));
