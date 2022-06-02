const attributes = {
  hello: "Hello,2ello",
  hello1: "Hello,Hello",
  hello2: "Hello,Hello,Hi",
  hello3: "true",
};

const addSpacetoComma = (str) => {
  return str.replace(/,/g, ", "); // regex or regular expression
};

const seperateString = (obj) => {
  let new_obj = {};
  for (key in obj) {
    new_obj[key] = addSpacetoComma(obj[key]);
  }
  return new_obj;
};

const seperateString1 = (obj) => {
  const new_obj = {};
  for (const key in obj) {
    new_obj[key] = obj[key].replace(/,/g, ", ");
  }
  return new_obj;
};

console.log(seperateString(attributes));
s;
