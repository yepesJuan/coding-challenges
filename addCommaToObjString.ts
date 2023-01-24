// A helper method that modifies a string by adding a space after a comma.
interface IObj1 {
  attr: {
    [key: string]: string;
  };
}
const attributes = {
  hello: "Hello,  ,2ello",
  hello1: "Hello,Hello",
  hello2: "Hello,Hello,Hi",
  hello3: "tru",
  hello4: "123",
};

const addSpacetoComma = (str: string): string => {
  return str.replace(/,(?=[^\s])/g, ", ");
};

const seperateString = (obj: IObj1["attr"]) => {
  const new_obj: IObj1["attr"] = {};
  for (const key in obj) {
    new_obj[key] = addSpacetoComma(obj[key]);
  }
  return new_obj;
};

console.log(seperateString(attributes));
