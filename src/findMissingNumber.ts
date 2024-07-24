// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  const a = new Set<number>(nums1),
    b = new Set<number>(nums2);
  const diff1 = [...a].filter((num) => !b.has(num));
  const diff2 = [...b].filter((num) => !a.has(num));
  return [diff1, diff2];
};

console.log(findDifference([1, 2, 3, 4, 5], [1, 2, 3, 0, 5])); // 4, 0
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // 3,
