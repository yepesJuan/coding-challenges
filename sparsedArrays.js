// There is a collection of input strings and a collection of query strings. For each query string,
// determine how many times it occurs in the list of input strings. Return an array of the results.
// Example
// strings = ['ab', 'ab', 'abc']
// query = ['ab','abc','bc']

function matchingStrings(strings, queries) {
  let ret = [];

  queries.forEach((item) => {
    ret.push(strings.filter((string) => string === item).length);
  });
  return ret;
}

// function matchingStrings(strings, queries) {
//     let temp =[];
//     const ret = [];
//     for(let i=0 ; i< queries.length; i++){
//         temp = strings.filter(word=>word===queries[i]);
//         // value[i] = (temp.length);
//         ret.push(temp.length)
//         temp = [];
// }
//     return ret
// }

// function matchingStrings(strings, queries) {
//     let result = []
//     for(let i = 0; i < queries.length; i++) {
//         let count = 0
//         for(let j = 0; j < strings.length; j++) {
//             if(queries[i] === strings[j] ) {
//             count++
//         }
//         }
//         result.push(count)
//     }
//     return result;
//}
