// given an array and a target.. 
//find the only two numbers in the array 
// that add up to thee target value 

const target = 12;
let array = [7,6,4,9,5];
let result = []

const twoSum = (arr, target) => {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				result[0] = arr[i]
				result[1] = arr[j]
			}
		}
	}
	return result;
}

result = twoSum(array, target)

console.log(result[0] , result[1])



// function twoSums(arr , target) {
//     let header = arr[0]
//     let results = []
//     let a = 0 
//     let b = 0

//     for(let i = 1; i < arr.length; i++) {
//         a = header + arr[i]
//         if ( a === target ) {
//             b = arr[i]
//             return (results = [header, b])
//         } 
        

      

//     }
// }


// result = twoSums(array, target13)

// console.log(result[0] + " and " +result[1] + " add up to " + target13)