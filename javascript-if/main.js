/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
}

function isEven(number) {
  if (number % 2) {
    return false;
  } else {
    return true;
  }
}

function startsWithJ(string) {
  if (string[0] === 'j' || string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

var person = {
  name: 'Ben',
  age: 28
};

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
isOldEnoughToDrink(person);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(ph) {
  if (ph < 7) {
    return 'acid';
  } else if (ph === 7) {
    return 'neutral';
  } else if (ph > 7 && ph <= 14) {
    return 'base';
  } else {
    return 'invalid ph level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the Warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}
