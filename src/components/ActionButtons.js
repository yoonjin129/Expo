// src/components/ActionButtons.js
import React from 'react';
import './ActionButtons.css';

const ActionButtons = () => {
  const handleSave = () => {
    alert('운동 기록이 저장되었습니다!');
    console.log('운동 저장 로직');
  };

  const handleShare = () => {
    alert('운동 기록을 공유합니다!');
    console.log('운동 공유 로직');
  };

  return (
    <div className="action-buttons-container">
      <button className="action-button save-button" onClick={handleSave}>
        <i className="material-icons">save</i> {/* <-- 저장 아이콘 추가 */}
        저장하기
      </button>
      <button className="action-button share-button" onClick={handleShare}>
        <i className="material-icons">share</i> {/* <-- 공유 아이콘 추가 */}
        공유하기
      </button>
    </div>
  );
};

export default ActionButtons;