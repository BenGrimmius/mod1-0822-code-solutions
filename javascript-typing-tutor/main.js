var $characters = document.querySelectorAll('span');
var $letter = $characters[0];
var i = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $letter.textContent) {
    $letter.className = 'correct';
    i++;
    $letter = $characters[i];
    $letter.className = 'next';
  } else if (event.key !== $letter.textContent) {
    $letter.className = 'incorrect';
  }
});
