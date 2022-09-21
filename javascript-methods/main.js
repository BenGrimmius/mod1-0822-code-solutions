var ex1 = 7;
var ex2 = 24;
var ex3 = 21;
var maximumValue = Math.max(ex1, ex2, ex3);
console.log('Maximum Value value:', maximumValue);

var heroes = ['Hellboy', 'Lobo', 'Batman', 'Spawn'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('Random Index value: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random hero value: ', randomHero);

var library = [
  {
    title: 'The Shining',
    author: 'Stephen King'
  },
  {
    title: 'Fear and Loathing in Las Vegas',
    author: 'Hunter S. Thompson'
  },
  {
    title: 'Struwwelpeter',
    author: 'Heinrich Hoffmann'
  }
];

var lastBook = library.pop();
console.log('The Last Book is: ', lastBook);
var firstBook = library.shift();
console.log('The First Book is: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('My new array is: ', library);

var fullName = 'Ben Grimmius';
var firstAndLastName = fullName.split(' ');
console.log('My first and last name are" ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name: ', sayMyName);
