// AI 피드백 메세지 
// src/components/FeedbackMessage.js
import React from 'react';
import './FeedbackMessage.css';

const FeedbackMessage = ({ message }) => {
  return (
    <div className="feedback-message-container">
      <p className="feedback-text">{message}</p>
    </div>
  );
};

export default FeedbackMessage; 