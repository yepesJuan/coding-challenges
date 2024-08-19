function singleNumber(nums: number[]): number {
  const map = new Map();
  let index = 1;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) index++;
    map.set(nums[i], index);
    index = 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) == 1) return nums[i];
  }
}

function singleNumber2(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  // let unique = 0;

  // for (let i = 0; i < l; i += 1) {
  //   unique = unique ^ nums[i];
  // }
  // return unique;

  return nums.reduce((a, b) => a ^ b);
}
