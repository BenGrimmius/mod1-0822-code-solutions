var $tasklist = document.querySelector('.task-list');

$tasklist.addEventListener('click', function (event) {

  console.log('event-target', event.target);
  console.log('event-target-tagname', event.target.tagName);

  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var $taskListItem = event.target.closest('.task-list-item');
  console.log('closest task.list.item', $taskListItem);
  $taskListItem.remove();
});
