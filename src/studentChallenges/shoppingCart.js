let shoppingList = ["milk", "bread", "eggs"];
let cart = ["beer", "wine", "chips", "bread", "cake"];

console.log(shoppingList)

for (let i = 0; i < shoppingList.length; i++) {
  for (let j = 0; j < cart.length; j++) {
    if (shoppingList[i] === cart[j]) {
      //shoppingList[i] = null;
      shoppingList.splice(i, 1)
    }
  }
}

const newShop = shoppingList.filter(item => !cart.includes(item))


console.time("loops")
console.log(shoppingList);
console.timeEnd()

console.time("methods")
console.log(newShop)
console.timeEnd()