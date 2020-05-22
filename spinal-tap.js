// convert a string to spinal case, all-lowercase-words-joined-by-dashes
function spinalCase(str) {
    // split string using regex at space, _ , or capitalized letter look  ahead
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
  }
  
console.log(spinalCase('The_Andy_Griffith_Show'));
// → the-andy-griffith-show
  