

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'dark';
  const isLight = theme === 'light';

  applyTheme(isLight);

  // Optional: Make it reactive if this script is included on settings page too
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.checked = isLight;
    themeToggle.addEventListener('change', () => {
      const isNowLight = themeToggle.checked;
      localStorage.setItem('theme', isNowLight ? 'light' : 'dark');
      applyTheme(isNowLight);
    });
  }
});

function applyTheme(isLight) {
  document.body.classList.toggle('light-theme', isLight);
  document.body.classList.toggle('dark-theme', !isLight);
}
