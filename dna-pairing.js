// pair dna element - A ⇔ T and G ⇔ C
function pairElement(str) {
    // split string into individual character in array
    // empty string to push to
    const dnaArr = str.split('');
    const dnaPair = [];

    // iterate through array, pair dna via switch statement
    for (let dna of dnaArr) {
    switch(dna) {
        case "A":
            dnaPair.push(["A", "T"]);
            break;
        case "T":
            dnaPair.push(["T", "A"]);
            break;
        case "G":
            dnaPair.push(["G", "C"]);
            break;
        case "C":
            dnaPair.push(["C", "G"]);
            break;

    }}

    return dnaPair;
}

console.log(pairElement("GCG"));
// → [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]