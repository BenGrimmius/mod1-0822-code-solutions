/* exported isVowel */

// Each character of the string needs to be checked individually if they are a vowel.
// Each capitalized and lowercase vowel option must be accepted as true.
// If none of the vowel options are present, the return value must be boolean false.

function isVowel(char) {
  for (var i = 0; i < char.length; i++) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true;
    } else if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      return true;
    }
  }
  return false;
}
