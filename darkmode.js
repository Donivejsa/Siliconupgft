const darkModeToggle = document.getElementById('darkmode-switch');
const body = document.body;

if (darkModeToggle) {
  // Kolla och applicera sparad preferens
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  body.classList.toggle('dark-mode', savedTheme === 'dark');
  darkModeToggle.checked = savedTheme === 'dark';

  // Hantera när användaren byter dark mode
  darkModeToggle.addEventListener('change', () => {
    const isDarkMode = darkModeToggle.checked;
    body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });

  // Lyssna på systemets färgschemapreferens
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const systemPrefersDark = event.matches;
    if (!localStorage.getItem('theme')) {
      body.classList.toggle('dark-mode', systemPrefersDark);
      darkModeToggle.checked = systemPrefersDark;
    }
  });
}
