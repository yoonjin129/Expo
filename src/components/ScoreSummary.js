// 운동 자세 평균 점수, 반복 횟수, 운동 시간 카드 
// src/components/ScoreSummary.js
import React from 'react';
import './ScoreSummary.css'; 

const ScoreSummary = ({ averageScore, totalReps, exerciseTime }) => {
  return (
    <div className="score-summary-container">
      {/* 운동 자세 평균 점수 카드 */}
      <div className="score-card">
        <p className="card-value">{averageScore}점</p>
        <p className="card-title">운동 자세 평균 점수</p>
      </div>

      {/* 운동 총 반복 횟수 카드 */}
      <div className="score-card">
        <p className="card-value">{totalReps}회</p>
        <p className="card-title">운동 총 반복 횟수</p>
      </div>

      {/* 운동 시간 카드 */}
      <div className="score-card">
        <p className="card-value">{exerciseTime}</p>
        <p className="card-title">운동 시간</p>
      </div>
    </div>
  );
};

export default ScoreSummary; 