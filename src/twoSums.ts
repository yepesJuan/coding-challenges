// given an array and a target..
// find the only two numbers in the array
// that add up to the target value

const target = 17;
const array = [2, 6, 3, 1, 0, 8, 9, 3];

const fastTwoSum = (arr: number[], _target: number): void => {
  const map: Record<number, boolean> = {};
  for (let num of arr) {
    const difference = _target - num;
    if (map[difference]) {
      console.log(difference, "+", num, "=", _target); // arr[1] + arr[3] = target
    }
    map[num] = true;
  }
};
console.time();
fastTwoSum(array, target);
console.timeEnd();
/************************************************************************** */
function fastTwoSum2(nums: number[], target: number) {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [complement, nums[i]];
    }
    map.set(nums[i], i);
  }
  throw new Error("No two sum solution");
}
console.log(fastTwoSum2(array, target));
/************************************************************************** */
const twoSum = (arr: number[], target: number) => {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result[0] = arr[i];
        result[1] = arr[j];
      }
    }
  }
  return result;
};
console.time();
console.log(twoSum(array, target));
console.timeEnd();

export {};
