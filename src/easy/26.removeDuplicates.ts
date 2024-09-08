// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

function removeDuplicates(nums: number[]) {
  let temp = [...new Set(nums)];
  nums.length = 0;
  nums.push(...temp);
  return nums.length;
}

const removeDuplicates2 = (nums: number[]) => {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 5]));
console.log(removeDuplicates2([1, 2, 3, 3, 3, 4]));
