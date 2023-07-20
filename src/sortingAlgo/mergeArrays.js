const mergeSortedArrays = (arr1, arr2) => {
  let result = [];
  while (arr1.length && arr2.length) {
    const next = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
    result.push(next);
  }
  // adds the adds the rest of either arr to the end of the result arr
  if (arr1.length) {
    result = result.concat(arr1);
  } else if (arr2.length) {
    result = result.concat(arr2);
  }
  // console.log(result);
  return result;
};

const arr1 = [3, 5, 20, 763, 999];
const arr2 = [1, 4, 8];

console.log(mergeSortedArrays(arr1, arr2));
