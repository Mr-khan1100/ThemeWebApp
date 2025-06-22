// src/context/ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';
import colorSchemes from '../styles/colorSchemes';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode]   = useState('Light');    // 'Light' or 'Dark'
  const [theme, setTheme] = useState('Crimson');  // 'Crimson'|'Aura'|'Field'

  const toggleMode = () =>
    setMode(m => (m === 'Light' ? 'Dark' : 'Light'));
  const changeTheme = () => {
    const themes = ['Crimson', 'Aura', 'Field'];
    const next = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[next]);
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
