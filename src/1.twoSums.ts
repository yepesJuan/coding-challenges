// Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.
// You may assume that each input would have exactly one solution.

const target = 17;
const array = [2, 6, 8, 4, 9];

const fastTwoSum = (arr: number[], _target: number): number[] => {
  let index = 0;
  const map: Record<number, number> = {};
  for (let num of arr) {
    const difference = _target - num;
    if (map[difference]) {
      console.log(difference, "+", num, "=", _target); // arr[1] + arr[3] = target
      return [map[difference], index];
    }
    map[num] = index;
    index++;
  }
};
console.log(fastTwoSum(array, target));
/************************************************************************** */
function fastTwoSum2(nums: number[], target: number) {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  throw new Error("No two sum solution");
}
console.log("index", fastTwoSum2(array, target));
/************************************************************************** */
// 2, 6, 8, 4, 9          (17)
const twoSum = (arr: number[], target: number) => {
  const result: number[] = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        result[0] = i;
        result[1] = j;
      }
    }
  }
  return result;
};
// console.time();
console.log(twoSum(array, target));
// console.timeEnd();
console.log(4 < 4);
export {};
