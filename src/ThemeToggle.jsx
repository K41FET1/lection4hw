import React, { useState } from 'react';

const ThemeToggle = ({ setTheme }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setTheme(!darkMode); // Update the theme in the parent component
  };

  return (
    <div style={{ padding: '10px' }}>
      <button onClick={toggleTheme}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
