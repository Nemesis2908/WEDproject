document.addEventListener('DOMContentLoaded', function () {
  const accButtons = document.querySelectorAll('.accordion');

  accButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;

      
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
});