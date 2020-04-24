// split arr into length of size and return a two-dimensional array
function chunkArray(arr, size) {
    // declare empty string placeholder
    let chunkedArr = [];
    // chunk away until arr is empty
    while (arr.length > 0) {
        // splice arr from index 0 to index size
        chunkedArr.push(arr.splice(0, size));
    }
    return chunkedArr;
}

console.log([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// → [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]