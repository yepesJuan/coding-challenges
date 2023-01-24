// given an array and a target..
// find the only two numbers in the array
// that add up to the target value

const target = 7;
const array = [2, 6, 3, 1];

const fastTwoSum = (arr: number[], _target: number) => {
  const map: Record<number, number> = {};
  for (let i = 0; i < arr.length; i++) {
    const difference = _target - arr[i];
    if (map[difference] !== undefined) {
      console.log(arr[map[difference]], "+", arr[i], "=", _target); // arr[1] + arr[3] = target
    } else {
      map[arr[i]] = i;
    }
  }
};
console.time();
fastTwoSum(array, target);
console.timeEnd();

const twoSum = (arr: number[], target: number) => {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result[0] = arr[i];
        result[1] = arr[j];
      }
    }
  }
  return result;
};
twoSum(array, target);

export {};
