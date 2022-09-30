/* exported compact */
// All falsy values must be returned into a new array.
// An empty array is created to push values into.
// A for loop is used to cycle through the array on index at a time.
// an if statement is used in each loop to determine if the value is truthy or not.
// The condition of the if statement must be universal to all truthy values.
// When the value is truthy it is pushed into the empty array.
// The new array is then returned.

function compact(array) {
  var myArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      myArray.push(array[i]);
    }
  }
  return myArray;
}
