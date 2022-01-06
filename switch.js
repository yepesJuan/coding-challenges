let duh = "orange";
switch (duh) {
  case "apple":
    console.log("red");
    break;
  case "banana":
    console.log("yellow");
    break;
  case "orange":
    console.log("orange");
    break;
  case "grape":
    console.log("purple");
    break;
  default:
    console.log("No fruit found");
}
/****************************************/

const frutas = {
  kiwi: "green",
  strawberry: "red",
  lemon: "yellow",
};
const fruta = "kiwi";
frutas[fruta];
console.log(fruta + ": " + frutas[fruta]);
console.log(frutas);

let fruits = [
  {
    name: "apple",
    color: "red",
  },
  {
    name: "banana",
    color: "yellow",
  },
];

let found = fruits.find((map) => map.name === "apple");
console.log(found);
