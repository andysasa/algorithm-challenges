// search and replace before with after
// first letter case should be preserved
function myReplace(str, before, after) {
    const newStr = str.split(' ');

    return newStr.map(word => {
        if (word == before) {
            if (before[0] === before[0].toUpperCase()){
                const capAfter = after.charAt(0).toUpperCase() + after.slice(1);
                return word = capAfter;
            }
            else return word = after;
        } else return word;
    }).join(' ');
  }

/* SIMPLE SOLUTION

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  }
  return str.replace(before, after);
}

*/
  
  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
// → A quick brown fox Leaped over the lazy dog