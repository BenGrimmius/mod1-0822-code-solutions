var $button = document.querySelector('.button');

var $body = document.querySelector('.body');

$button.addEventListener('click', function (event) {
  if ($button.className === 'button off') {
    $button.className = 'button on';
    $body.className = 'body light-background';
  } else if ($button.className === 'button on') {
    $button.className = 'button off';
    $body.className = 'body black-background';
  }
});
