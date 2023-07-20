const attributes = {
    hello: "Hello,  ,2ello",
    hello1: "Hello,Hello",
    hello2: "Hello,Hello,Hi",
    hello3: "tru",
    hello4: "123",
};
const addSpacetoComma = (str) => {
    return str.replace(/,(?=[^\s])/g, ", ");
};
const seperateString = (obj) => {
    const new_obj = {};
    for (const key in obj) {
        new_obj[key] = addSpacetoComma(obj[key]);
    }
    return new_obj;
};
console.log(seperateString(attributes));
export {};
//# sourceMappingURL=addCommaToObjString.js.map