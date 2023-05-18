const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function () {
  const text = nameInput.value;
  if (text === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = text;
  }
});
