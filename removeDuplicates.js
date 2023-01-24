const numbers = [10, 10, 20, 30, 30, 20];

// 1.
const filteredNumbers = numbers.filter((number, index) => {
  return numbers.indexOf(number) == index;
});
console.log({ filteredNumbers });
//****************************************************** */

// 2.
const noDuplicate = [...new Set(numbers)];
console.log(noDuplicate);
//****************************************************** */

// 3.
let map = {};
for (let i = 0; i < numbers.length; i++) {
  if (map[numbers[i]] != true) {
    map[numbers[i]] = i;
  }
  continue;
}
console.log(map);
