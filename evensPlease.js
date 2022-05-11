const arr = [1, 4, 6, 9, 2];

function evenPls(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
console.log(evenPls(arr));

const evenArr = arr.filter((x) => x % 2 === 0);
console.log(evenArr);
