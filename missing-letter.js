// find missing letter and return it, if no missing letter, return undefined
function fearNotLetter(str) {
    // convert letter to char code numbers
    const letterNum = str.split('').map(letter => letter.charCodeAt());

    // if the next letter char code minus current letter char code is greater than 1, it means a letter has been jumped
    // return the proper letter using String.fromCharCode()
    for (let i = 0; i < letterNum.length; i++) {
        if (letterNum[i+1] - letterNum[i] > 1) {
            return String.fromCharCode(letterNum[i] + 1);
        }
    }

    // return undefined if no missing letter found
    return undefined;
  }
  
  console.log(fearNotLetter("abce"));
  // → d
  