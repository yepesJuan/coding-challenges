const target = 18;
const array = [1, 2, 3, 8, 0, 10];

const threeSums = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          return [arr[i], arr[j], arr[k]];
          //  return [i,j,k]
        }
      }
    }
  }
};

console.log(threeSums(array, target));

/**************************************************/

const threeSum = (
  array: number[],
  target: number
): [number, number, number][] => {
  array.sort((a, b) => a - b);
  const triplets: [number, number, number][] = [];

  for (let i = 0; i < array.length - 2; i++) {
    // if (array[i] != array[i - 1]) {
    // making sure our solution set does not contain duplicate triplets
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === target) {
        triplets.push([array[i], array[left], array[right]]);
        // making sure our solution set does not contain duplicate triplets
        while (array[left] == array[left + 1]) left++;
        while (array[right] == array[right - 1]) right--;
        left++;
        right--;
      } else if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      }
      // }
    }
  }
  return triplets;
};
console.log(threeSum(array, target));
