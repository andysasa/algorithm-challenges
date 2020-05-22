// translate pig latin - if str starts with consonant, move consonant(s) to end and add "ay"
// if str starts with vowel, return str + "way"
function translatePigLatin(str) {
    // regex ^(start of string) [aeiou](vowels) \w*(0+ one word character) and replace entire match + "way"
    // regex ^(start of string) [^aeoiu]+(more than one non-vowel) \w*(0+ one word character) and replace with second part of phrase + first part of phrase + "ay"
    return str.replace(/^[aeiou]\w*/, "$&way")
                .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  
  console.log(translatePigLatin("algorithm"));
  // → algorithmway