c:\Users\SIKAPA\Desktop\Jesus\index.htmlc:\Users\SIKAPA\Desktop\Jesus\index.htmlc:\Users\SIKAPA\Desktop\Jesus\index.htmlc:\Users\SIKAPA\Desktop\Jesus\index.htmlconst themeToggle = document.getElementById('themeToggle');
const body = document.body;

const applyTheme = () => {
  const savedTheme = localStorage.getItem('churchTheme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️ Light Mode';
  } else {
    body.classList.remove('dark-mode');
    if (themeToggle) themeToggle.textContent = '🌙 Dark Mode';
  }
};

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('churchTheme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
}

applyTheme();
