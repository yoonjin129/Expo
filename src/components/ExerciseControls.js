// src/components/ExerciseControls.js
import React from 'react';
import './ExerciseControls.css';

const ExerciseControls = ({ isExercising, onStartPause, onEndExercise }) => {
  return (
    <div className="exercise-controls-container">
      <button
        className={`control-button start-pause-button ${isExercising ? 'pause' : 'start'}`}
        onClick={onStartPause}
      >
        <span className="material-icons">
          {isExercising ? 'pause' : 'play_arrow'} {/* 운동 중이면 'pause', 아니면 'play_arrow' */}
        </span>
        {isExercising ? '일시정지' : '운동 시작'}
      </button>

      <button
        className="control-button end-button"
        onClick={onEndExercise}
      >
        <span className="material-icons">stop</span>
        운동 종료
      </button>
    </div>
  );
};

export default ExerciseControls;