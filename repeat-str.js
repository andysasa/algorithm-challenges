// repeat str num times, return empty str if num is not positive
function repeatStrNumTimes(str, num) {
    // repeat string via recursive function
    return num > 0 ? str + repeatStrNumTimes(str, num - 1) : "";
}

console.log(repeatStrNumTimes("hello", 4));
// → hellohellohellohello