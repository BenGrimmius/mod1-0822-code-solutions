var count = 0;

var $hotbutton = document.querySelector('.hot-button');

var $clickCount = document.querySelector('.click-count');

$hotbutton.addEventListener('click', function (event) {
  count++;
  $clickCount.textContent = 'Clicks: ' + count;
  if (count < 4) {
    $hotbutton.className = 'hot-button cold';
  } else if (count < 7) {
    $hotbutton.className = 'hot-button cool';
  } else if (count < 10) {
    $hotbutton.className = 'hot-button tepid';
  } else if (count < 13) {
    $hotbutton.className = 'hot-button warm';
  } else if (count < 16) {
    $hotbutton.className = 'hot-button hot';
  } else {
    $hotbutton.className = 'hot-button nuclear';
    $clickCount.textContent = 'Clicks: ' + count + ' STOP CLICKING!';
  }
});
