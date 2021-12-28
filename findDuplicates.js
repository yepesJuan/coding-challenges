const a = [1, 2, 3, 3, 4, 4, 4];
/******************* Map *************************/
function countDuplicate(a) {
  let counts = {};

  for (let i = 0; i < a.length; i++) {
    if (counts[a[i]]) {
      counts[a[i]] += 1;
    } else {
      counts[a[i]] = 1;
    }
  }
  console.log(counts);
  for (let prop in counts) {
    if (counts[prop] >= 2) {
      console.log(prop + " counted: " + counts[prop] + " times.");
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

/******************** Filter but has bug ************************/

const duplicates = a.filter((item, index) => index !== a.indexOf(item));
console.log(duplicates);
