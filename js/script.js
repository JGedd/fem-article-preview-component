const button = document.querySelector('.btn');
const shareUL = document.querySelector('.share');
const shareIcon = document.getElementById('shareIcon');

button.addEventListener('click', () => {
  button.classList.toggle('focused');
  shareUL.classList.toggle('hide');
  shareIcon.classList.toggle('highlighted');
});
