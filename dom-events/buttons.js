function handleClick(event) {
  console.log('Button Clicked');
  console.log(event);
  console.log(event.target);
}
var $clicked = document.querySelector('.click-button');
$clicked.addEventListener('click', handleClick, true);

function handleMouseover(event) {
  console.log('Button Hovered');
  console.log(event);
  console.log(event.target);
}

var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover, true);

function handleDoubleClick(event) {
  console.log('Button Double-Clicked');
  console.log(event);
  console.log(event.target);
}

var $dble = document.querySelector('.double-click-button');
$dble.addEventListener('dblclick', handleDoubleClick, true);
