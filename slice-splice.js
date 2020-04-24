// insert arr1 to arr2 at n index
// do not mutate original arrays
function sliceSplice(arr1, arr2, n){
    // slice method to make new copy of arr2 so original arr2 not mutated
    let newArr = arr2.slice();

    // ... spread operator spread out individual elements in arr1
    // without ... the fx put arr1 as a single element
    newArr.splice(n, 0, ...arr1);

    // return in new line because splice returns elements removed, which would result in empty [] in this case
    return newArr;
}

console.log(sliceSplice([1, 2, 3], [4, 5, 6], 1));
// → [4, 1, 2, 3, 5, 6]