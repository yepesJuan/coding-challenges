const numbers = [10, 10, 20, 30, 30, 20];
let noDuplicates = []
const filteredNumbers = numbers.filter((number, index) => {
  return noDuplicates = numbers.indexOf(number) == index;
});
console.log({ filteredNumbers });

// const noDuplicates = [...new Set(numbers)];
// console.log(filteredNumbers);

let map = {}
for (let i = 0; i < numbers.length; i++) {
    if (map[numbers[i]] != true) {
       map[numbers[i]] = i
    }
    continue
}
console.log(map);