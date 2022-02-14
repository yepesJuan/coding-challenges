const numbers = [10, 20, 30, 30, 20];
const filteredNumbers = numbers.filter((number, index) => {
  // console.log(index);
  // console.log(number);
  // console.log(numbers.indexOf(number));
  let ans = numbers.indexOf(number) == index;
  console.log(ans);
  return ans;
  // return ans;
});
console.log(filteredNumbers);
