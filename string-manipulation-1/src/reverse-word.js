/* exported reverseWord */

// An empty string needs to be defined in order to contain the reverse word.
// The last index needs to be aimed at first in order to reverse the input.
// The loop needs to make its way backwards toward the first index of the string.
// One by one that string needs each index to be inputted into an empty string.
// The once-empty string needs to be returned with the reverse form of the original argument.

function reverseWord(word) {
  var myWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    myWord += word[i];
  }
  return myWord;
}
