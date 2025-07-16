// src/components/TimerDisplay.js
import React from 'react';
import './TimerDisplay.css'; 

const TimerDisplay = ({ remainingTime }) => {
  console.log('TimerDisplay - received remainingTime:', remainingTime); 

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="timer-display-container"> 
      <p className="timer-label">남은 시간</p>
      <p className="time-value">{formatTime(remainingTime)}</p>
    </div>
  );
};

export default TimerDisplay;