// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1. done

// const findDifference = (nums1: number[], nums2: number[]): number[][] => {
//   const a = new Set<number>(nums1),
//     b = new Set<number>(nums2);
//   const diff1 = [...a].filter((num) => !b.has(num));
//   const diff2 = [...b].filter((num) => !a.has(num));
//   return [diff1, diff2];
// };

// console.log(findDifference([1, 2, 3, 4, 5], [1, 2, 3, 0, 5])); // 4, 0
// console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // 3,

// const chloesPhoneNumber = [9, 5, 4, 9, 1, 8, 7, 4, 2, 3]; // 9, 4, 8,
// const juansPhoneNumber = [3, 2, 3, 5, 5, 7, 5, 7, 1, 5]; //

const arr1 = [1, 2, 3, 4, 5]; // 4
const arr2 = [3, 5, 2, 0, 1]; //0

const findMissingNums = (arr1: number[], arr2: number[]) => {
  const notinarr1 = [];

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

  return notinarr1;
  // const notInArr2 = arr2.filter((num) => !arr1.includes(num));

  // console.log(notInArr1, notInArr2);

  // const a = new Set(notInArr1),
  //   b = new Set(notInArr2);

  // return [Array.from(a), Array.from(b)];
};
console.log(findMissingNums(arr1, arr2));
