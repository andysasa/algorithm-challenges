// return true if the string in arr[0] contains all of the letters in arr[1]
function mutation(arr){
    // convert strings to lower case for comparison
    let target = arr[0].toLowerCase();
    let test = arr[1].toLowerCase();

    // iterate through each letter in test
    // check if letter is in target (arr[0]), return false if not found
    for (let letter of test) {
        if (target.indexOf(letter) < 0) return false;

        // ** another solution in following line **
        // if (!target.includes(letter)) return false;
    }

    return true;
}

console.log(mutation(["hello", "hey"]));
// → false