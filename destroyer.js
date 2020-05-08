// remove all elements in array that match the following arguments
function destroyer(arr) {
    // create an array of arguments
    let arg = []
    for (let i=1; i < arguments.length; i++) arg.push(arguments[i]);
    
    // return values not included in arguments
    return arr.filter(ele => !arg.includes(ele));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// → [1, 1]
