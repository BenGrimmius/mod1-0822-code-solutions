/* exported getKeys */
// The keys for an object must be returned into an array.
// An empty array is created.
// Using a for.. in statement, access all the keys in the object.
// All the keys are then pushed to the empty array.
// The new array is then returned to show all the keys of the object.

function getKeys(object) {
  var myArray = [];
  for (var x in object) {
    myArray.push(x);
  }
  return myArray;
}
