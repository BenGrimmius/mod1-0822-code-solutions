var $open = document.querySelector('.open-modal');
var $pop = document.querySelector('.pop-up');
var $popButton = document.querySelector('.no');
var $body = document.querySelector('.body');

$open.addEventListener('click', function (event) {
  if ($pop.className === 'pop-up hidden') {
    $pop.className = 'pop-up visible';
    $body.className = 'darken-background';
    $open.className = 'open-modal-dark';
  }
});

$popButton.addEventListener('click', function (event) {
  if ($pop.className === 'pop-up visible') {
    $pop.className = 'pop-up hidden';
    $body.className = '';
    $open.className = 'open-modal';
  }
});
