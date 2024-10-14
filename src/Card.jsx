import React, { useState } from 'react';

const Card = ({ title, image, description, darkMode }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{
      backgroundColor: darkMode ? '#444' : '#FFF',
      color: darkMode ? '#FFF' : '#000',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      margin: '10px 0',
      width: '250px',
      transition: 'background-color 0.5s, color 0.5s',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center', // Center text
    }}>
      {visible && (
        <div>
          <h3>{title}</h3>
          <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
          <p>{description}</p>
        </div>
      )}
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide Title' : 'Show Title'}
      </button>
    </div>
  );
};

export default Card;
