// Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.
// You may assume that each input would have exactly one solution.

const target = 17;
// const array = [2, 6, 8, 4, 9];

// const fastTwoSum = (arr: number[], _target: number): number[] => {
//   let index = 0;
//   const map: Record<number, number> = {};
//   for (let num of arr) {
//     const difference = _target - num;
//     if (map[difference]) {
//       console.log(difference, "+", num, "=", _target); // arr[1] + arr[3] = target
//       return [map[difference], index];
//     }
//     map[num] = index;
//     index++;
//   }
// };
// console.log(fastTwoSum(array, target));
// /************************************************************************** */
// function fastTwoSum2(nums: number[], target: number) {
//   const map = new Map<number, number>();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
//   throw new Error("No two sum solution");
// }
// console.log("index", fastTwoSum2(array, target));
// /************************************************************************** */
// // 2, 6, 8, 4, 9          (17)
// const twoSum = (arr: number[], target: number) => {
//     const result: number[] = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 1; j < arr.length; j++) { // cant use the same number ex. [1,3,4,2] 3+3=6 but 4+2=6
//         if (arr[i] + arr[j] === target && i != j) {
//           result[0] = i;
//           result[1] = j;
//           break // one found we can break
//         }
//         if(result.length) break // once found we can break
//       }
//     }
//     return result;
//   };
// // console.time();
// console.log("slow", twoSum(array, target));
// console.timeEnd();
// [2, 6, 8, 4, 9]; 17
const sortedArr = [2,8,6,4,9]


function sorted(arr, target) {
  let left = 0
  let right = arr.length-1
  let flag = true
  while(flag) {
    let curr = arr[left] + arr[right]
    if(curr == target) {
      flag = false 
      break 
    }
    if(curr < target) left++
  if(curr > target) right--
  }
  return [left, right]




}
console.log(sorted(sortedArr, target))
export {};

// notes
// .sort(a,b ==> a - b) ascending 
// .sort(a,b ==> b - a) descending 
// shallow vs deep copy 
    // A shallow copy duplicates only the top-level elements of an array or object, 
    //while a deep copy duplicates all levels, including nested objects or arrays.
// to make shallow copy ==> [...arr], Array.from(arr), arr.slice()
// to make deep copy ==> JSON.parse(JSON.stringify(arr)) or lodash .cloneDeep(arr)
