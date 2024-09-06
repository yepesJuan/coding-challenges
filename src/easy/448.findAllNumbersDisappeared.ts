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

function findDisappearedNumbers2(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = [];
  // Mark the presence of each number
  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  // Collect numbers that are missing
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1])); // 5, 6
console.log(findDisappearedNumbers2([1, 1])); // 2

function findDisappearedNumbers3(nums: number[]): number[] {
   const result: number[] = [];
  for (let i = 1; i <= nums.length ; i++) {
    let found = false;
    
    for (let j = 0; j < nums.length; j++) {
      if (i == nums[j]) {
        found = true;
        break; // If a match is found, stop checking and skip pushing to result
      }
    }
    
    if (!found) {
      result.push(i);
    }
  }

  return [...new Set(result)];

};

console.log(findDisappearedNumbers3([4, 3, 2, 7, 8, 2, 3, 1])); // 5, 6
console.log(findDisappearedNumbers3([1, 1])); // 2