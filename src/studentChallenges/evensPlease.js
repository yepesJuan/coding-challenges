const arr = [1, 4, 6, 9, 2];
// return
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

// method
const evenArr = arr.filter((x) => x % 2 === 0);
console.log({ evenArr });

// no return
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evensOnly(nums) {
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i] % 2 === 0);
    if (nums[i] % 2 === 0) {
      console.log(nums[i]);
    }
  }
}

console.log(evensOnly(nums));
