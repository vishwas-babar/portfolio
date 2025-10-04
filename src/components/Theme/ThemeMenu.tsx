'use client';

import { themes } from '@/appData';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeMenu = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (window) setTheme(localStorage.getItem('theme') ?? theme);
  }, []);

  useEffect(() => {
    if (window) document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (window) {
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <div className="fixed right-6 bottom-4 z-50 md:right-11 md:bottom-11">
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        className="group bg-secondary hover:bg-accent border border-border hover:border-accent/50 rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <div className="relative w-6 h-6 md:w-7 md:h-7">
          {theme === 'dark' ? (
            <Sun className="w-full h-full text-secondary-content group-hover:text-primary transition-all duration-300 rotate-0 group-hover:rotate-180" />
          ) : (
            <Moon className="w-full h-full text-secondary-content group-hover:text-primary transition-all duration-300 rotate-0 group-hover:-rotate-12" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeMenu;
