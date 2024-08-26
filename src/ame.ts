/*
Below is an array which needs to be filled to its highest number in the series in sequential order, starting at 1. And return the number of positions that was filled. It should work for any array.

[34, 2, 12, 7, 3, 16]


Ex:
[2, 4, 5] 1, 3 

Return value should be 2. Values are 1 and 3. */

const arr = [34, 2, 12, 7, 3, 16]

function solution(arr) {

	arr.sort((a, b) => a - b)
  const maxInArr = arr[arr.length-1]
  
  
  
  console.log(arr)

	let result = [] 

	for(let i = 1; i <= maxInArr; i++){
  	if(i != arr[i-1])
     result.push(i)
  }
  
  console.log({result})

}


console.log(solution(arr))