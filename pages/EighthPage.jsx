
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../indexcs.css';

const EighthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = "80%";
    }
  }, []);

  const handlePrev = () => {
    navigate('/seventh')
  }

  const handleNext = () => {
    const selected = Array.from(document.querySelectorAll(".goal-button.selected"));
    if (selected.length < 1) {
      alert("하나 이상 선택해주세요.");
      return;
    }
    localStorage.setItem("selectedGoalsStep5", JSON.stringify(selected.map(btn => btn.textContent.trim())));
    navigate('/ninth');
  };

  const toggleSelect = (e) => {
    e.currentTarget.classList.toggle("selected");
  };

  return (
    <div>
      <div className="header">
        <div className="progress-container">
          <div className="progress-bar" id="progressBar"></div>
        </div>
      </div>
      <div className="main">
        <h2 className="title">어떤 플랫폼을 사용하여<br />운동을 시작할까요?</h2>
        <p className="subtitle">언제든지 변경할 수 있어요.</p>
        <div className="button-grid vertical-buttons">
          {["추천 플랜", "스스로 만든 플랜"].map((level, index) => (
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

export default EighthPage;
