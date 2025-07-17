// src/components/ActionButtons.js
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ useNavigate import
import "./ActionButtons.css";

const ActionButtons = () => {
  const navigate = useNavigate(); // ✅ useNavigate 호출해서 navigate 생성

  const handleSave = () => {
    alert("운동 기록이 저장되었습니다!");
    console.log("운동 저장 로직");
  };

  const goToMainPage = () => {
    navigate("/main"); // ✅ '/main' 경로로 이동
  };

  return (
    <div className="action-buttons-container">
      <button className="action-button save-button" onClick={goToMainPage}>
        <i className="material-icons">home</i>
        메인
      </button>

      <button className="action-button save-button" onClick={handleSave}>
        <i className="material-icons">save</i>
        저장하기
      </button>
    </div>
  );
};

export default ActionButtons;
