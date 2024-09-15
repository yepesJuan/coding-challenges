// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

//There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Input: s = "III" // Output: 3
// Explanation: III = 3.

// Input: s = "MCMXCIV" // Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


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
  const map  = new Map(Object.entries(romanIntegerMap))
  // console.log(map)
  let result = 0;
  let prevValue = 0;

  for (let i = 0; i < s.length; i++) {
    const curValue = map.get(s[i]); // or just romanIntegerMap[s[i]]


    if (curValue > prevValue) {
      result += curValue - 2 * prevValue;
    } else {
      result += curValue;
    }

    prevValue = curValue;
  }

  return result;
}

console.log(romanToInt("IV"));

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