let arr = [1,4,6,9,2]

function evenPls(array) {
    let newArr = []
    for( let i = 0; i < array.length ; i++){
        if(array[i] % 2 == 0 ) {
            newArr.push(array[i])
        }
    } 
    console.log(newArr)  
}
evenPls(arr)

// arr.filter(x => x % 2 === 0)
// })