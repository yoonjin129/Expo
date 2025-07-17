// src/components/ExerciseHeader.js
import React from 'react';
//import './ExerciseHeader.css';
import './Header.css';
import { useNavigate } from 'react-router-dom'; 
const ExerciseHeader = ({ exerciseName }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <header className="header-container">
      <button className="back-button" onClick={handleBack}>
        <span className="material-icons">arrow_back_ios</span>
      </button>
      <h1 className="header-title">{exerciseName}</h1>
      <div className="placeholder"></div>
    </header>
  );
};

export default ExerciseHeader; 