const num = 2;
// 9 -> 3
// 16 -> 4

const squareRoot = (num) => {
  if (num === 1) {
    return 1;
  }
  if (num < 4) {
    return "Only works with perfect square natural postive numbers only, try again";
  }
  for (let i = 0; i <= num / 2; i++)
    if (i * i === num) {
      return i;
    }
};

console.log(squareRoot(num));
