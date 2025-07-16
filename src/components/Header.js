// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ 추가
import "./Header.css";

const Header = ({ title, showBackButton }) => {
  const navigate = useNavigate(); // ✅ 추가

  const handleBack = () => {
    navigate(-1); // ✅ 이전 페이지로 이동
  };

  return (
    <header className="header-container">
      {showBackButton && (
        <button className="back-button" onClick={handleBack}>
          <span className="material-icons">arrow_back_ios</span>
        </button>
      )}
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;
