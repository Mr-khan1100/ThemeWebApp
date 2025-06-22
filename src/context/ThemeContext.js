// src/context/ThemeContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import colorSchemes from '../styles/colorSchemes';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode]   = useState('Light');    // 'Light' or 'Dark'
  const [theme, setTheme] = useState('Crimson');  // 'Crimson'|'Aura'|'Field'

   useEffect(() => {
    const storedMode = localStorage.getItem('web-mode');
    const storedTheme = localStorage.getItem('web-theme');

    if (storedMode) setMode(storedMode);
    if (storedTheme) setTheme(storedTheme);
  }, []);


  const toggleMode = () => {
    const newMode = mode === 'Light' ? 'Dark' : 'Light';
    setMode(newMode);
    localStorage.setItem('web-mode', newMode);
  };


  const changeTheme = () => {
    const themes = ['Crimson', 'Aura', 'Field'];
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    const newTheme = themes[nextIndex];
    setTheme(newTheme);
    localStorage.setItem('web-theme', newTheme);
  };
  // pick your colors
  const colors = colorSchemes[mode][theme];

  return (
    <ThemeContext.Provider value={{ mode, theme, colors, toggleMode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
