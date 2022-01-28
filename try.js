function discountPrices (prices, discount) {
 

  let discounted = []
  

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(discounted)

 // 
  
  return discounted

}

const lol = [5, 20, 10]
const percentage = .5
const one = discountPrices(lol,percentage)

console.log(one)



