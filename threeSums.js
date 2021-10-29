const target = 21;
let array = [7,6,4,9,5];
let result = []

const twoSum = (arr, target) => {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === target) {
                    result[0] = arr[i]
                    result[1] = arr[j]
                    result[2] = arr[k]
                }
            }
		}
	}
	return result;
}

result = twoSum(array, target)

console.log(result[0] , result[1], result[2])