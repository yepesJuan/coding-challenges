//output name of beer, the price,and the average ratings using asterisk
// i.e **** is a 4-star ratings
// (use Math.round) */
const beers = require("/Users/juanyepes/code/codingChallenges/beers.json");

function findBeer(beer) {
  console.log(beer.name + " " + beer.price);
  console.log("Rating = " + " " + ratingConvert(beer.rating.average));
}

function ratingConvert(rate) {
  let avg = Math.round(rate);
  switch (avg) {
    case 1:
      return "*";
    case 2:
      return "**";
    case 3:
      return "***";
    case 4:
      return "****";
    case 5:
      return "*****";
    default:
      return "no rating";
  }
}

const beerNum = process.argv[2] - 1; // process.arg[0] is node ||| process.arg[1] is beerSelect.js ||| process.arg[2] would be the Id of beer u want
findBeer(beers[beerNum]);
