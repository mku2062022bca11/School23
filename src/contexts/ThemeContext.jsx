import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('green');

  const themes = {
    green: {
      primary: 'text-green-400',
      primaryDark: 'text-green-300',
      bgPrimary: 'bg-green-500',
      bgPrimaryHover: 'hover:bg-green-600',
      border: 'border-green-400',
      focusRing: 'focus:ring-green-400',
      gradient: 'from-green-400 to-emerald-600'
    },
    blue: {
      primary: 'text-blue-400',
      primaryDark: 'text-blue-300',
      bgPrimary: 'bg-blue-500',
      bgPrimaryHover: 'hover:bg-blue-600',
      border: 'border-blue-400',
      focusRing: 'focus:ring-blue-400',
      gradient: 'from-blue-400 to-cyan-600'
    },
    purple: {
      primary: 'text-purple-400',
      primaryDark: 'text-purple-300',
      bgPrimary: 'bg-purple-500',
      bgPrimaryHover: 'hover:bg-purple-600',
      border: 'border-purple-400',
      focusRing: 'focus:ring-purple-400',
      gradient: 'from-purple-400 to-pink-600'
    },
    red: {
      primary: 'text-red-400',
      primaryDark: 'text-red-300',
      bgPrimary: 'bg-red-500',
      bgPrimaryHover: 'hover:bg-red-600',
      border: 'border-red-400',
      focusRing: 'focus:ring-red-400',
      gradient: 'from-red-400 to-orange-600'
    }
  };

  const currentTheme = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};