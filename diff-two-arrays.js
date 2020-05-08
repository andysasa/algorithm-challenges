// compare arrays and return symmetrical difference of two arrays
function diffArrays(arr1, arr2)  {
    // check to see if element in arr1 is in arr2 and vice versa
    // return new array via filter of unique element in each array
    return arr1.filter(element => !arr2.includes(element))
        .concat(arr2.filter(element => !arr1.includes(element)));
    
}

console.log(diffArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// → [4]