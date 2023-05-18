const textInput = document.getElementById('validation-input');
textInput.addEventListener('blur', () => {
  const textLength = textInput.getAttribute('data-length');
  const textInputLength = textInput.value.length;
  if (parseInt(textLength) === textInputLength) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
});
