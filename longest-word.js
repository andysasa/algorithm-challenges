// return length of longest word in a string
function findLongestWordLength(str) {
    // declare longestWord to compare
    // break up string
    let longestWord = 0;
    let splitStr = str.split(' ');
    
    // iterate through each word, compare the word with current longestWord
    // if length is longer, set word length to  be new longestWord
    for (let word of splitStr) {
        if (word.length > longestWord) longestWord = word.length;
    }

    return longestWord;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  // → 6
  