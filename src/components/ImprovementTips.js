// 자세 개선을 위한 팁 (체크박스 목록)
// src/components/ImprovementTips.js
import React from 'react';
import './ImprovementTips.css'; 

const ImprovementTips = ({ tips }) => {
  return (
    <div className="improvement-tips-section">
      <h2 className="section-title">자세 개선을 위한 팁</h2>
      <ul className="tips-list">
        {tips.map(tip => (
          <li key={tip.id} className="tip-item">
            {/* 체크박스 대신 이미지에 맞춰 원형 불릿을 CSS로 구현*/}
            <span className="tip-text">{tip.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImprovementTips; 