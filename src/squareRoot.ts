// finds the square root of any number
const findSquareRoot = (num: number) => {
  let i = 1;
  const found = false;
  while (!found) {
    // If n is a perfect square
    if (i * i === num) {
      return i;
    } else if (i * i > num) {
      let res = square(num, i - 1, i);
      return res;
    }
    i++;
  }
};
console.log(findSquareRoot(17));

function square(n: number, i: number, j: number) {
  let mid = (i + j) / 2;
  let mul = mid * mid;
  if (mul === n || Math.abs(mul - n) < 0.001) {
    return mid;
  } else if (mul < n) {
    return square(n, mid, j);
  } else {
    return square(n, i, mid);
  }
}

/********************************************** */
// finds perfect squares only
const squareRoot = (num: number) => {
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

// console.log(squareRoot(9));

function mySqrt(x: number): number {
  let start = 0
  let end = x

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const midSquared = mid * mid

    if (midSquared === x) {
      return mid
    } else if (midSquared < x) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return end
};

mySqrt(8)