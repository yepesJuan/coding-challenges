// Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.
// You may assume that each input would have exactly one solution.

const target = 17;
const array = [2, 6, 8, 4, 9];

const fastTwoSum = (arr: number[], _target: number): number[] => {
  let index = 0;
  const map: Record<number, number> = {};
  for (let num of arr) {
    const difference = _target - num;
    if (map[difference]) {
      console.log(difference, "+", num, "=", _target); // arr[1] + arr[3] = target
      return [map[difference], index];
    }
    map[num] = index;
    index++;
  }
};
console.log("using object: ", fastTwoSum(array, target));
/************************************************************************** */
function fastTwoSum2(nums: number[], target: number) {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  throw new Error("No two sum solution");
}
console.log("using new map: ", fastTwoSum2(array, target));
/************************************************************************** */
// 2, 6, 8, 4, 9          (17)
const slowTwoSum = (arr: number[], target: number) => {
  const result: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      // cant use the same number ex. [1,3,4,2] 3+3=6 but 4+2=6
      if (arr[i] + arr[j] === target && i != j) {
        result[0] = i;
        result[1] = j;
        break; // one found we can break
      }
      if (result.length) break; // once found we can break
    }
  }
  return result;
};
console.log("slow n^2: ", slowTwoSum(array, target));
/************************************************************************** */
const twoSum = (arr: number[], target: number) => {
  // we make a copy of the array and save the index to reflect back on the original arr to get answer
  // we couldve use slice, [...arr], or Array.from() to make shallow copy but the index wouldnt align with original copy
  const copy  =  arr.map((value, index) => ({ value, index })); 
  copy.sort((a,b) => a.value - b.value)
  console.log(copy)

let left = 0
let right = copy.length-1

while(left < right) {
  let curr = copy[left].value + copy[right].value
  if(curr == target) {
  return [copy[left].index, copy[right].index]
  }
if(curr < target) left++
if(curr > target) right--
}
};
console.log("shallow copy nlogn:", twoSum(array, target))
/************************************************************************** */
const sortedArr = [1,2,3,4,5,6,7,8,9];
function sorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let curr = arr[left] + arr[right];
    if (curr == target) {
      break;
    }
    if (curr < target) left++;
    if (curr > target) right--;
  }
  return [left, right];
}
console.log("sorted arr: ", sorted(sortedArr, target));

// notes
// .sort(a,b ==> a - b) ascending
// .sort(a,b ==> b - a) descending
// shallow vs deep copy
// A shallow copy duplicates only the top-level elements of an array or object,
//while a deep copy duplicates all levels, including nested objects or arrays.
// to make shallow copy ==> [...arr], Array.from(arr), arr.slice()
// to make deep copy ==> JSON.parse(JSON.stringify(arr)) or lodash .cloneDeep(arr)

export {};
