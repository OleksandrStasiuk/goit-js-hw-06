let counterValue = 0;
const valueEl = document.querySelector('#value');
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.action === 'decrement') {
      counterValue--;
    } else if (btn.dataset.action === 'increment') {
      counterValue++;
    }
    valueEl.textContent = counterValue;
  });
});
