const a = [1, 2, 3, 3, 5, 5, 5, 2, 2, 2];
/******************* Map *************************/
function countDuplicate(a) {
  let bucket = {};
  a.forEach((item) => {
    bucket[item] ? bucket[item] += 1 : bucket[item] = 1
  })

  const index = Object.keys(bucket).find(
    (key) => bucket[key] === Math.max(...Object.values(bucket))
  );

  for (let key in bucket) {
    console.log(key + " counted: " + bucket[key] + " times.");
  }
  console.log(index + " is the mode");
}
countDuplicate(a);

/******************* Reduce *************************/
const a1 = [65, 65, 21, 53, 321, 321, 1, 1, 1, 1];
function modearray(array) {
  let count = {};
  for (const element of array) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
}

console.log(modearray(a1));
