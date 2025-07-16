// src/components/Header.js
// 뒤로가기
import React from 'react';
import './Header.css'; 

const Header = ({ title, showBackButton }) => {
  const handleBack = () => {
    // 실제 앱에서는 react-router-dom 등을 사용하여 이전 페이지로 이동
    console.log('뒤로가기 클릭');
  };

  return (
    <header className="header-container">
       <button className="back-button" onClick={handleBack}>
        <span className="material-icons">arrow_back_ios</span>
      </button>
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;