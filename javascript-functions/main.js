function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log('Minutes to seconds:', seconds);
}
convertMinutesToSeconds(5);

function greet(name) {
  var greeting = 'Hello, ' + name + '!';
  console.log(greeting);
}
greet('Ben');

function getArea(width, height) {
  var area = width * height;
  console.log('The area is:', area);
}
getArea(17, 42);

function person(person) {
  var firstName = person.firstName;
  console.log('The first name property is:', firstName);
}
person({ firstName: 'Ben', lastName: 'Grimmius' });

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  console.log('The last element is:', lastElement);
}
getLastElement(['propane', 'grill', 'spatula']);
