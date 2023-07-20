let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// output = 1, 5, 9

// [0][0]
// [1][1]
// [2][2]

function printDiagnal(arr) {
  let res1 = 0;
  for (let i = 0; i < arr.length; i++) {
    res1 = arr[i][i];
    console.log(res1);
  }
}

printDiagnal(arr1);
