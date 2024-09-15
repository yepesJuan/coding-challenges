//
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1. done

const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  const a = new Set<number>(nums1),
    b = new Set<number>(nums2);
  const diff1 = [...a].filter((num) => !b.has(num));
  const diff2 = [...b].filter((num) => !a.has(num));

  return [diff1, diff2];
};

console.log(findDifference([1, 2, 3, 4, 5], [1, 2, 3, 0, 5])); // 4, 0
// console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // 3,

//****************************************************************** */

const arr1 = [1, 2, 3, 4, 5, 4]; // 4
const arr2 = [3, 5, 2, 0, 1]; //0

const findMissingNums = (arr1: number[], arr2: number[]) => {
  const notinarr1: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let flag = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) notinarr1.push(arr1[i]);
  }

  const notInArr2 = arr2.filter((num) => !arr1.includes(num));
  return [...new Set(notinarr1), ...new Set(notInArr2)];
};
console.log(findMissingNums(arr1, arr2));

// ***************************************************//

const findDistinctIntegers = (
  nums1: number[],
  nums2: number[]
): [number[], number[]] => {
  const map1 = new Map<number, number>();
  const map2 = new Map<number, number>();

  // Fill hash maps with occurrences
  for (const num of nums1) {
    map1.set(num, (map1.get(num) || 0) + 1);
  }
  for (const num of nums2) {
    map2.set(num, (map2.get(num) || 0) + 1);
  }

  const uniqueInNums1: number[] = [];
  const uniqueInNums2: number[] = [];

  // Find elements in nums1 that are not in nums2
  for (const num of map1.keys()) {
    if (!map2.has(num)) {
      uniqueInNums1.push(num);
    }
  }

  // Find elements in nums2 that are not in nums1
  for (const num of map2.keys()) {
    if (!map1.has(num)) {
      uniqueInNums2.push(num);
    }
  }

  return [uniqueInNums1, uniqueInNums2];
};

// Example usage with duplicates
const nums1 = [1, 2, 2, 3, 4, 4, 4];
const nums2 = [3, 3, 4, 5, 6, 6];
const result = findDistinctIntegers(nums1, nums2);
console.log(result);

export { findDifference, findMissingNums, findDistinctIntegers };
