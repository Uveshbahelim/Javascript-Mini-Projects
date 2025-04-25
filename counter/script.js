let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.classList;

    if (action.contains('decrease')) {
      count--;
    } else if (action.contains('increase')) {
      count++;
    } else if (action.contains('reset')) {
      count = 0;
    }

    value.textContent = count;
    value.style.color = count > 0 ? 'red' : count < 0 ? 'blue' : 'black';
  });
});
