import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../indexcs.css';

const FirstPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = "10%";
    }
  }, []);

  const handleNext = () => {
    const selected = Array.from(document.querySelectorAll(".goal-button.selected"));
    if (selected.length < 1) {
      alert("하나 이상 선택해주세요.");
      return;
    }
    localStorage.setItem("selectedGoalsStep1", JSON.stringify(selected.map(btn => btn.textContent.trim())));
    navigate('/second');
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
        <h2 className="title">운동 수준이 어떻게 되시나요?</h2>
        <p className="subtitle">적절한 운동 추천이 필요해요! 외부에 공개되지 않아요.</p>
        <div className="button-grid vertical-buttons">
          {["입문", "초급", "중급", "고급", "전문가"].map((level, index) => (
            <button key={index} className="goal-button level-button" onClick={toggleSelect}>
              <strong>{level}</strong><br />
              <span className="desc">{
                ["운동초보", "자세는 조금 알지만 무슨 운동을 해야 할지 몰라요", 
                "운동 자세를 잘 알고, 나만의 루틴이 있어요", 
                "운동을 직업으로 삼을 만큼의 지식이 있어요", 
                "운동 선수급의 지식과 경험을 갖고 있어요"][index]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="arrow-buttons">
        <button className="arrow" style={{ visibility: "hidden" }}>&#8249;</button>
        <button className="arrow" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default FirstPage;
