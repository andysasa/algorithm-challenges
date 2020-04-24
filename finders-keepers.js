// look through arr and return first truthy element
function findElement(arr, func) {
    // The find() method returns the value of the first element in the provided array that satisfies the provided testing function
    return arr.find(func);
  }
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// → 2