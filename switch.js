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

/****************************************/

function assignGrade(num) {
  switch (true) {
    case num < 59:
      console.log("f");
      break;
    case num < 70:
      console.log("d");
      break;
    case num < 80:
      console.log("c");
      break;
    case num < 90:
      console.log("b");
      break;
    default:
      console.log("a");
  }
}

assignGrade(69);
/****************************************/

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
