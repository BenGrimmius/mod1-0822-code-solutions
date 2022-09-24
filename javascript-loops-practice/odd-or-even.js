/* exported oddOrEven */

// function oddOrEven(numbers) {
//   for (var i = 0; i < numbers.length; i++) {
//     if ((numbers[i] % 2 === 0)) {
//       numbers[i] = 'even';
//     } else {
//       numbers[i] = 'odd';
//     }
//   }
// }

function oddOrEven(numbers) {
  var myArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2 === 0)) {
      myArray.push('even');
    } else {
      myArray.push('odd');
    }
  }
  return myArray;
}
