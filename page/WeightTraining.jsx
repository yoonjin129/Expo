import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../indexcs.css';

const WeightTraining = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = "60%";
    }
  }, []);

  const handlePrev = () => {
    navigate('/exercisenumber');
  };

  const handleNext = () => {
    const selected = document.querySelector(".goal-button.selected");
    if (!selected) {
      alert("하나를 선택해주세요.");
      return;
    }
    localStorage.setItem("selectedGoalsStep6", JSON.stringify([selected.textContent.trim()]));
    navigate('/summary'); // 실제 다음 경로로 수정해주세요
  };

  const toggleSelect = (e) => {
    // 모든 버튼 선택 해제
    document.querySelectorAll(".goal-button").forEach(btn => btn.classList.remove("selected"));
    // 현재 버튼만 선택
    e.currentTarget.classList.add("selected");
  };

  return (
    <div>
      <div className="header">
        <div className="progress-container">
          <div className="progress-bar" id="progressBar"></div>
        </div>
      </div>
      <div className="main">
        <h2 className="title">규칙적으로 웨이트 트레이닝을<br />한 지 얼마나 됐나요?</h2>
        <div className="button-grid vertical-buttons">
          {["처음이에요", "3개월 이내", "3~6개월", "6~12개월", "1년 이상", "5년 이상"].map((level, index) => (
            <button key={index} className="goal-button level-button" onClick={toggleSelect}>
              <strong>{level}</strong>
            </button>
          ))}
        </div>
      </div>
      <div className="arrow-buttons">
        <button className="arrow" onClick={handlePrev}>&#8249;</button>
        <button className="arrow" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default WeightTraining;

};

export default WeightTraining;
