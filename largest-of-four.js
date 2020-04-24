// return an array consisting the largest num from each sub-array
function largestOfFour(arr) {
    // declare empty array placeholder
    let largestArr = [];

    for (let subArray of arr) {
        // set current largest number as first num of the sub-array
        let largestNum = subArray[0];
        for (let num of subArray) {
            // if a num found to be larger, set it as new largest Num
            if (num > largestNum) largestNum = num;
        }
        largestArr.push(largestNum);
    }

    return largestArr;
  }
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
  // → [25, 48, 21, -3]