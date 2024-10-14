import React, { useState } from 'react';
import Todo from './Todo.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import Counter from './Counter.jsx';
import Card from './Card.jsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: darkMode ? '#333' : '#FFF',
      color: darkMode ? '#FFF' : '#000',
      minHeight: '100vh',
      transition: 'background-color 0.5s, color 0.5s',
      padding: '20px',
    }}>
      <h1 style={{ marginBottom: '20px' }}>React Components</h1>
      <ThemeToggle setTheme={setDarkMode} />
      <Todo />
      <Counter />
      <Card
        title="Sample Card"
        image="https://via.placeholder.com/200x150"
        description="This is a description for the card."
        darkMode={darkMode}
      />
    </div>
  );
};

export default App;
