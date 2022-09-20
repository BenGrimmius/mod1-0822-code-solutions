function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('5 minutes is ' + convertMinutesToSeconds(5) + ' seconds');

function greet(name) {
  var greeting = 'Hello, ' + name + '!';
  return greeting;
}
console.log(greet('Ben'));

function getArea(width, height) {
  var area = width * height;
  return 'The area is ' + area;
}
console.log(getArea(17, 42));

function person(person) {
  var firstName = person.firstName;
  return 'The first name property is ' + firstName;
}
console.log(person({ firstName: 'Ben', lastName: 'Grimmius' }));

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return 'The last element is ' + lastElement;
}
console.log(getLastElement(['propane', 'grill', 'spatula']));
