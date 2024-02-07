
import React from 'react';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {imageUrl && <img src={imageUrl} alt="Card Image" style={{ marginBottom: '8px',maxWidth:'100%'}} />}
      <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
