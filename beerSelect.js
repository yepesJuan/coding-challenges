//output name of beer, the price,and the average ratings using asterisk
// i.e **** is a 4-star ratings
// (use Math.round) */
const beers = require('./beers.json')

 function findBeer(beer) {
    console.log(beer.name + " " + beer.price)
    ratingConvert(beer.rating.average)
 }

 function ratingConvert(rate) {
     let avg = Math.round(rate)    
     switch (avg) {
        case 1 : 
            console.log('*')
            break
        case 2 : 
            console.log('**')
            break
        case 3 : 
            console.log('***')
            break
        case 4 : 
            console.log('****')
            break
        case 5 : 
            console.log('*****')
            break
        default :
            console.log("no rating")
     }
 }

 const beerNum = process.argv[2] // from command line
 console.time()
 findBeer(beers[beerNum])
 console.timeEnd()
 


 


 

//output name of beer, the price,and the average ratings using asterisk
// i.e **** is a 4-star ratings
// (use Math.round) */