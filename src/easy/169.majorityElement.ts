/*Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2*/

function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate = 0;

  for (let n of nums) {
    if (count === 0) candidate = n;
    count += n === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

function majorityElement2(nums: number[]): number {
  let candidate = nums[0];
  let count = 1;

  // Phase 1: Find the candidate
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
      if (count === 0) {
        candidate = nums[i];
        count = 1;
      }
    }
  }

  // Phase 2: Verification (optional if majority element always exists)
  // In this case, it's assumed the majority element always exists, so no need for verification.

  return candidate;
}

console.log(majorityElement2([3, 2, 3])); // 3
