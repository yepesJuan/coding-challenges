// const arr: { info: number }[] = [{ info: 6 }, { info: 5 }, { info: 4 }]; // type is an array of objects with key (info) and value (number)
// const target = 5;

// // info needs to be number in the if but then a string when we reassing it inside the if
// function modifyArray(
//   arr, // first parameter with type
//   target // second parameter with
// ) {
//   ////// return type above /////
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].info > target) {
//       arr[i].info = "+";
//     } else if (arr[i].info < target) {
//       arr[i].info = "-";
//     } else {
//       arr[i].info = "=";
//     }
//   }
//   return arr;
// }

// console.log(modifyArray(arr, target));

// /* There is a few ways to code this challenge, and there are few ways to do the typescript part as well */
// /* remember when you run this you do ts-node nameOffile.ts not node */

// export {}; // i need this because i have these variables declare in another file in my folder, you probaly wont need this

type numOrString = number | string; // this is called an union, you cant declare a union with interfaces
type ret = {
  info: string;
}[];
const arr: { info: number }[] = [{ info: 6 }, { info: 5 }, { info: 4 }]; // type is an array of objects with key (info) and value (number)
const target = 5;

// info needs to be number in the if, but then a string when we reassing the value of info inside the if, (there's a better way to handle this im looking into it)
function modifyArray(
  arr: { info: numOrString }[], // first parameter with type
  target: number // second parameter with
): ret {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].info > target) {
      arr[i].info = "+";
    } else if (arr[i].info < target) {
      arr[i].info = "-";
    } else {
      arr[i].info = "=";
    }
  }
  return arr as ret;
}

console.log(modifyArray(arr, target));

/* There is a few ways to code this challenge, and there are few ways to do the typescript part as well */
/* remember when you run this in the terminal youll need to do ts-node nameOffile.ts not node */

export {}; // i need this because i have these variables declare in another file in my folder, you probaly wont need this
