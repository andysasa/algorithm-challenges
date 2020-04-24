// deep comparison between two objects
function deepComparison(a, b) {
    // return true if a === b
    if (a === b) return true;

    // null is a type of object
    // make sure compared arguments are obj and  not null
    if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;

    // assign obj keys to a variable
    let  keysA = Object.keys(a), keysB = Object.keys(b);

    // compare length of keys for a and b
    if (keysA.length !=  keysB.length) return false;

    // iterate through key in keysA for deep comparison
    for (let key of keysA) {
        // if keysB does not include key in keysA, return false
        // recursive function for deeper comparison, return false if recursive function returns  false
        if (!keysB.includes(key) || !deepComparison(a[key], b[key])) return false;
    }

    // if all comparison tests passed, return true
    return true;
}



let obj = {here: {is: "an"}, object: 2};
console.log(deepComparison(obj, obj));
// → true
console.log(deepComparison(obj, {here: 1, object: 2}));
// → false
console.log(deepComparison(obj, {here: {is: "an"}, object: 2}));
// → true