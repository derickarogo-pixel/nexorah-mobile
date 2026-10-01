document.addEventListener('DOMContentLoaded', () => {
  const footerYear = new Date().getFullYear();
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const style = document.createElement('style');
  style.textContent = `
    .main-nav a.active {
      color: var(--text);
    }
  `;
  document.head.appendChild(style);

  const footerText = document.querySelector('.footer p');
  if (footerText) {
    footerText.textContent = `Professional red team operations for resilient security programs. © ${footerYear}`;
  }
});
