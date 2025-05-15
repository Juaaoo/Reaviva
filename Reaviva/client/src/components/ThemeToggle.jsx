import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Mudar Tema ({theme})
    </button>
  );
}
