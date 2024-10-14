import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState('');
  const [items, setItems] = useState([]);

  const addTodo = () => {
    if (todos.trim()) {
      setItems([...items, { text: todos, checked: false }]);
      setTodos('');
    }
  };

  const toggleCheck = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked; 
    setItems(newItems);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '2px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Todo List</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a todo"
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '250px',
            marginRight: '10px',
            outline: 'none',
            transition: 'border-color 0.3s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#a5c9ff')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Add Todo
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', marginTop: '10px' }}>
        {items.length === 0 ? (
          <li style={{ color: '#777' }}>No todos added yet!</li>
        ) : (
          items.map((item, index) => (
            <li
              key={index}
              style={{
                color: item.checked ? 'green' : 'red',
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderBottom: '1px solid #eee',
                backgroundColor: '#fff',
                borderRadius: '4px',
                marginBottom: '5px',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleCheck(index)}
                style={{ marginRight: '10px', cursor: 'pointer' }}
              />
              {item.text}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Todo;
