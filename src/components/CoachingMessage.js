// src/components/CoachingMessage.js
import React from 'react';
import './CoachingMessage.css'; 

const CoachingMessage = ({ message }) => {
  return (
    <div className="coaching-message-container">
      <p className="coaching-text">{message}</p>
    </div>
  );
};

export default CoachingMessage; 