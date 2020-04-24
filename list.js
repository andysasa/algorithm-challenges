// eloquent javascript chapter 4 exercises
// convert array to a list
function arrayToList(arr) {
    let list = null;

    
    for (let i = arr.length-1; i >= 0; i--) {
        // each loop list creates a new object with two properties
        // rest is assigned to the value list had when the object is created
        list = {value: arr[i], rest: list};
    }
    
    return list;
}

// convert list to array
function listToArray(list) {
    let arr = [];

    // initiate node = list, and iterate as long as node is true
    // after each loop, set node as node.rest, loop will terminate when node = null
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }

    return arr;
}

// take a value and a list and create a new list that adds the value to the front of the input list
function prepend(value, list) {
    return {value, rest: list}
}

// take a list and a number and return element at the given position in the list
// return undefined when there is no such element
function nth(list, n) {
    if (!list) return undefined;
    if (n == 0) return list.value;
    // recursively call nth until n == 0
    // call list.rest to access rest of list
    else return nth(list.rest, n-1);
}



console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20