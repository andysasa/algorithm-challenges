// eloquent javascript chapter 4 exercises
// return new array in inverse order
function reverseArray(arr) {
    let reversedArray = [];

    for (let i = arr.length-1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    
    return reversedArray;
}

// modify current array in inverse order
function reverseArrayInPlace(arr) {

    // iterate through half of the array as middle arr
    // store arr[i] in temp variable, swap front-end and back-end index
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }

    return arr;

}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArrayInPlace([1,2,3,4,5]));