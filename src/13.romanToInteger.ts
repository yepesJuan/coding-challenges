// In this function we use prevValue to determine if the previous num should be sub or add.
function romanToInt(s: string): number {
  const romanIntegerMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // "MCMXCIV""
  let result = 0;
  let prevValue = 0;

  for (let i = 0; i < s.length; i++) {
    const curValue = romanIntegerMap[s[i]];


    if (curValue > prevValue) {
      result += curValue - 2 * prevValue;
    } else {
      result += curValue;
    }

    prevValue = curValue;
  }

  return result;
}

console.log(romanToInt("LVIII"));

// In this function nextValue determines if the current numeral should be sub or add
function romanToInt2(s: string): number {
  const romanIntegerMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  const length = s.length;

  for (let i = 0; i < length; i++) {
    const curValue = romanIntegerMap[s[i]];
    const nextValue = i < length - 1 ? romanIntegerMap[s[i + 1]] : 0;

    if (curValue < nextValue) {
      result -= curValue;
    } else {
      result += curValue;
    }
  }

  return result;
}

console.log(romanToInt2("MCMXCIV"))