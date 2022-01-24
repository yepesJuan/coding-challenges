const a = [1, 2, 3, 3, 5, 5, 5];
/******************* Map *************************/
function countDuplicate(a) {
  let bucket = {};

  for (let i = 0; i < a.length; i++) {
    if (bucket[a[i]]) {
      bucket[a[i]] += 1;
    } else {
      bucket[a[i]] = 1;
    }
  }
  console.log(bucket);
  const values = Object.values(bucket);
  const index = Object.keys(bucket).find(
    (key) => bucket[key] === Math.max(...values)
  );
  console.log(index + " is the mode");

  for (let key in bucket) {
    if (bucket[key]) {
      console.log(key + " counted: " + bucket[key] + " times.");
    }
  }
}
countDuplicate(a);

/******************** For Each ************************/

const count = {};
a.forEach((item) => {
  if (count[item]) {
    count[item] += 1;
    return;
  }
  count[item] = 1;
});
console.log(count);

/******************** Filter ************************/
const val = Object.values(a);
const duplicates = a.filter((item, index) => index === Math.max(...val));
console.log(duplicates);
