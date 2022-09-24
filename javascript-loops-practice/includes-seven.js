/* exported includesSeven */

// function includesSeven(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === 7 && typeof array[i] === typeof 7) {
//       return true;
//     } else if (array[i] === 7 && typeof array[i] !== typeof 'string') {
//       return true;
//     } else if (array[i] !== 7 && typeof array[i] !== typeof 7) {
//       return false;
//     } else if (array[i] === 7) {
//       return true;
//     }
//   }
// }

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
