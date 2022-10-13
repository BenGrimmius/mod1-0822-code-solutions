var $form = document.querySelector('#contact-form');
console.log($form);

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var $submission = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log($submission);
  $form.reset();
});