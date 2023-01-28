document.querySelector('.cube-list').addEventListener('click', (evt) => {
  const target = evt.target;
  if(target.classList.contains('more')) {
    const result = target.parentNode.querySelector('.cube-description');
    if(result.style.display == 'block') {
      result.style.display = 'none';
      target.textContent = 'See more';
    } else {
      result.style.display = 'block';
      target.textContent = 'Hide';
    }
  }
});