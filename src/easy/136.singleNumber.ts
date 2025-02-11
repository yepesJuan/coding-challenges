//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

function singleNumber(nums: number[]): number {
  const map = new Map();
  let index = 1;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) index++;
    map.set(nums[i], index);
    index = 1;
  }

  for (const key of map.keys()) {
    if (map.get(key) == 1) return key;
  }
  return -1;
}

console.log(singleNumber([1, 2, 3, 4, 1, 2, 3]));

function _singleNumber(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums.reduce((a, b) => a ^ b);

  // let unique = 0;

  // for (let i = 0; i < l; i += 1) {
  //   unique = unique ^ nums[i];
  // }
  // return unique;
}
