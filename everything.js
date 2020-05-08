// implement an every function, one version with for loop, another with some method
function every(array, test) {
    return !array.some((element) => !test(element));
}

function every2(array, test) {
    for (let element of array) {
        if (!test(element)) return false;
    }

    return true;
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true