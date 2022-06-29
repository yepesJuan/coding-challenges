const numbers = [10, 10, 20, 30, 30, 20];
const filteredNumbers = numbers.filter((number, index) => {
  console.log({ number });
  console.log({ index });
  console.log(" ", numbers.indexOf(number));
  let ans = numbers.indexOf(number) == index;
  return ans;
  // return ans;
});
console.log({ filteredNumbers });

// const noDuplicates = [...new Set(numbers)];
// console.log(filteredNumbers);
