let duh = "apple"
switch (duh) {
  case 'apple':
    console.log("red");
    break;
  case 'banana':
   console.log("yellow");
    break;
  case 'orange':
    console.log("orange");
    break;
  case 'grape':
    console.log("purple");
    break;
  default:
    console.log("No fruit found");
}

console.log(duh)


const frutas = {
    kiwi: 'green',
    strawberry: 'red',
    lemon: 'yellow'
}
const fruta = 'kiwi'
const colors = frutas[fruta]
console.log(fruta + ": " + colors)


let fruits = [{
    name:  "apple",
    color: "red"
}, {
    name: "banana", 
    color: "yellow"
}]

let found = fruits.find(map => map.name === "apple")
console.log(found)






