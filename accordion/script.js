document.querySelectorAll('.question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.question').classList.toggle('show-text');
    });
});