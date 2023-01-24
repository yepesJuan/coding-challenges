// code challenge for new students
type numOrString = number | string; // this is called an union, you can't declare a union with interfaces

const arr: { info: number }[] = [{ info: 6 }, { info: 5 }, { info: 4 }];
const target = 5;

function modifyArray(arr: { info: numOrString }[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].info > target) {
      arr[i].info = "+";
    } else if (arr[i].info < target) {
      arr[i].info = "-";
    } else {
      arr[i].info = "=";
    }
  }
  return arr;
}

console.log(modifyArray(arr, target));

export {};
