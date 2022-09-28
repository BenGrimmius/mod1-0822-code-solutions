/* exported getWords */

// An empty array is declared in order to push our selected indexes to.
// Wherever there is a space (' ') in the string argument it will be split creating an array.
// If an empty string is passed as an argument then the empty string must be returned.
// After splitting the words into an array, we must cycle through the new array and push each index into our empty array.
// the once-empty array is returned.

function getWords(string) {
  var myArray = [];
  var words = string.split(' ');
  if (string === '') {
    return myArray;
  }
  for (var i = 0; i < words.length; i++) {
    myArray.push(words[i]);
  }
  return myArray;
}
