// use reduce method in combination with concat to 'flatten' an array of arrays into a single array
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((prev, current) => prev.concat(current)));
// → [1, 2, 3, 4, 5, 6]