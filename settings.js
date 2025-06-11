document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  const isLight = theme === 'light';
  applyTheme(isLight);

  const themeToggle = document.getElementById('themeToggle');
  const notificationsToggle = document.getElementById('notificationsToggle');
  const qualitySelect = document.getElementById('qualitySelect');
  const privacyToggle = document.getElementById('privacyToggle');

  if (themeToggle) {
    themeToggle.checked = isLight;
    themeToggle.addEventListener('change', () => {
      const isNowLight = themeToggle.checked;
      localStorage.setItem('theme', isNowLight ? 'light' : 'dark');
      applyTheme(isNowLight);
    });
  }

  if (notificationsToggle) {
    notificationsToggle.checked = localStorage.getItem('notifications') === 'enabled';
    notificationsToggle.addEventListener('change', () => {
      const enabled = notificationsToggle.checked;
      localStorage.setItem('notifications', enabled ? 'enabled' : 'disabled');
      alert(enabled ? 'Notifications Enabled' : 'Notifications Disabled');
    });
  }

  if (qualitySelect) {
    qualitySelect.value = localStorage.getItem('quality') || 'Normal';
    qualitySelect.addEventListener('change', () => {
      localStorage.setItem('quality', qualitySelect.value);
      alert(`Media quality set to: ${qualitySelect.value}`);
    });
  }

  if (privacyToggle) {
    privacyToggle.checked = localStorage.getItem('privacy') === 'private';
    privacyToggle.addEventListener('change', () => {
      const isPrivate = privacyToggle.checked;
      localStorage.setItem('privacy', isPrivate ? 'private' : 'public');
      alert(isPrivate ? 'Profile set to Private' : 'Profile set to Public');
    });
  }
});

// ✅ Apply theme class to <body>
function applyTheme(isLight) {
  document.body.classList.toggle('light-theme', isLight);
  document.body.classList.toggle('dark-theme', !isLight);
}
