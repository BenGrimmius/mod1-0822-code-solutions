var width = 3;
var height = 7;
var area = width * height;
console.log('Area:', area);
console.log('Type of area is:', typeof area);

var bill = 5;
var payment = 10;
var change = payment - bill;
console.log('Change:', change);
console.log('Type of change is:', typeof change);

var quizzes = 90;
var midterm = 79;
var final = 100;
var grade = (quizzes + midterm + final) / 3;
console.log('Grade is:', grade);
console.log('Type of grade is:', typeof grade);

var firstName = 'Ben';
var lastName = 'Grimmius';
var fullName = firstName + ' ' + lastName;
console.log('My full name is:', fullName);
console.log('Type of fullName is:', typeof fullName);

var pH = 11;
var isAcidic = pH < 7;
console.log('Is it acidic?', isAcidic);
console.log('Type of isAcidic:', typeof isAcidic);

var headCount = 370;
var isSparta = headCount === 300;
console.log('Is this Sparta?', isSparta);
console.log('Type of isSparta:', typeof isSparta);

var motto = fullName;
motto += ' ' + 'is the GOAT';
console.log('What is my motto?', motto);
console.log('Type of motto:', typeof motto);
