/* exported capitalize */
function capitalize(word) {
  var firstLetter = word[0].toUpperCase();
  var lowerCase = word.toLowerCase();
  var removeFirst = lowerCase.slice(1);
  return firstLetter + removeFirst;
}
