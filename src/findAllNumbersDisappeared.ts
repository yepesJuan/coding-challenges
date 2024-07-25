// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

const findDisappearedNumbers = (nums: number[]): number[] => {
  const set = new Set<number>(nums);
  const result: number[] = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (!set.has(i)) result.push(i);
  }
  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // 5, 6
console.log(findDisappearedNumbers([1, 1])); // 2
