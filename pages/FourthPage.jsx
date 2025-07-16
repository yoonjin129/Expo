
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../indexcs.css';

const Fourthpage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = "40%";
    }
  }, []);

  const handlePrev = () => {
    navigate('/third')
  }

  const handleNext = () => {
    const selected = Array.from(document.querySelectorAll(".goal-button.selected"));
    if (selected.length < 1) {
      alert("하나 이상 선택해주세요.");
      return;
    }
    localStorage.setItem("selectedGoalsStep1", JSON.stringify(selected.map(btn => btn.textContent.trim())));
    navigate('/fifth');
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
        <h2 className="title">어떤 기구를 사용할 수 있나요?</h2>
        <p className="subtitle">기구 또는 장소에 따라 맞게 추천해드려요</p>
        <div className="button-grid vertical-buttons">
          {["헬스장 기구", "홈짐 기구", "맨몸 운동", "소도구 운동"].map((level, index) => (
            <button key={index} className="goal-button level-button" onClick={toggleSelect}>
              <strong>{level}</strong><br />
              <span className="desc">{
                ["헬스장에 기구, 머신이 준비되어있어요.", "바벨, 덤벨, 머신등이 집에 준비되어 있어요.", 
                "기구 없이 몸 하나로 운동이 가능해요.", 
                "덤벨, 케틀벨, 밴드 등의 운동기구들이 준비되어 있어요."][index]}</span>
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

export default Fourthpage;
