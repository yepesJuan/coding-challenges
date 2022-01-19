const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];
function howMany(a) {
  let counter = 0;
  for (bool of a) {
    if (bool) {
      counter++;
    }
  }
  return counter;
}

console.log(howMany(testArray));
console.log(testArray.includes(true, 0));

let arr = [1, 4, 6, 9, 2, 11];
function findOdds(array) {
  const newArr = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
console.log(findOdds(arr));
