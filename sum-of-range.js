// eloquent javascript chapter 4 exercises
// sum range from start to end values and increment by step
function range(start, end, step) {
    let range = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) range.push(i);
    } else {
        for (let i = start; i >= end; i += step) range.push(i);
    }
    
    return range;
}

function sum(range) {
    let sum = 0;

    // for (let i = 0; i < range.length; i++) {
    //      let i = range[i];    
    //  } => for (let i of range)
    for (let i of range) {
        sum += i;
    }

    return sum;
}

console.log(range(5,2,-1));
console.log(sum(range(5,2,-1)));
