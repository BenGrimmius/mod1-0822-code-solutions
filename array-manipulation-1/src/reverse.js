/* exported reverse */
// Function designed to reverse an array.
// create an empty array to push values into.
// A for loop is used starting at the arrays last index and cycles down to the beginning of the array.
// The array is then pushed into the empty array from last to first in original array.
// return the new array.

function reverse(array) {
  var myArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    myArray.push(array[i]);
  }
  return myArray;
}
