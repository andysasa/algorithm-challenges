// take mult arrays and return an array of unique values in the order of the original provided arrays
function uniteUnique(arr) {
    // take arguments and put them into an array
    const args = Array.prototype.slice.call(arguments);
    // flatten the argument array
    const arrArg = [].concat(...args);
    // empty array to push results into
    const uniqueArr = [];

    // filter array for unique values
    arrArg.filter(num => {
        if (!uniqueArr.includes(num)) uniqueArr.push(num);
    });

    return uniqueArr;

  }
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// → [1, 3, 2, 5, 4]
  
