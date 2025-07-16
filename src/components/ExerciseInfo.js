// src/components/ExerciseInfo.js
import React from 'react';
import './ExerciseInfo.css';

const ExerciseInfo = ({ currentSet, currentReps }) => {
  return (
    <div className="exercise-info-container">
      <div className="info-item">
        <p className="info-label">세트</p>
        <p className="info-value">{currentSet}</p>
      </div>
      <div className="info-item">
        <p className="info-label">반복 횟수</p>
        <p className="info-value">{currentReps}</p>
      </div>
    </div>
  );
};

export default ExerciseInfo;