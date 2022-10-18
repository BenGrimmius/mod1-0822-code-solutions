var $tabContainer = document.querySelector('.tab-container');

var $tab = document.querySelectorAll('.tab');

var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }

  var $dataList = event.target.getAttribute('data-view');

  for (i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === $dataList) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
});
