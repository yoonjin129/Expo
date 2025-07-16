// src/components/ScoreBar.js
import React from 'react';
import './ScoreBar.css';

const ScoreBar = ({ score }) => {
  // 점수에 따라 색상을 다르게 가능 (예: 70점 이하는 주황색, 85점 이상은 녹색)
  const scoreColor = score >= 85 ? '#4CAF50' : score >= 70 ? '#FFC107' : '#F44336';

  return (
    <div className="score-bar-container">
      <p className="score-label">AI 점수</p>
      <div className="score-bar-background">
        <div
          className="score-bar-fill"
          style={{ width: `${score}%`, backgroundColor: scoreColor }} // 점수에 따라 너비와 색상 변경
        ></div>
        <span className="score-value">{score}점</span> {/* 막대 위에 점수 표시 */}
      </div>
    </div>
  );
};

export default ScoreBar;