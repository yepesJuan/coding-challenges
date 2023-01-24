const arr = ["Aurelie", "Brian", "Farrukh", "Ronny", "Zhuopu", "Longestss"];
const longestString2 = (arr) => {
  let longest = "";
  arr.forEach((item) => {
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest;
};

console.log(longestString2(arr));
