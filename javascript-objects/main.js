var student = {
  firstName: 'Ben',
  lastName: 'Grimmius',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full name is:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Audio Engineer';
console.log('Lives in irvine:', student.livesInIrvine);
console.log('Previous occupation:', student.previousOccupation);
console.log('Value of stuedent:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Land Cruiser',
  year: '1991'
};

vehicle['color'] = 'Black';
vehicle['isConvertable'] = false;
console.log('Vehicle color:', vehicle['color']);
console.log('Is it convertable?:', vehicle['isConvertable']);
console.log('Vehicle object:', vehicle);

var pet = {
  name: 'Kiara',
  type: 'Cat'
};
delete pet.name;
delete pet.type;
console.log('Pet object:', pet);
