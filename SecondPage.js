
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../indexcs.css';

const SecondPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = "20%";
    }
  }, []);

  const handleNext = () => {
    const selected = Array.from(document.querySelectorAll(".goal-button.selected"));
    if (selected.length < 2) {
      alert("두개 이상 선택해주세요.");
      return;
    }
    localStorage.setItem("selectedGoalsStep2", JSON.stringify(selected.map(btn => btn.textContent.trim())));
    navigate('/third ');
  };

  const handlePrev = () => {
    navigate('/first');
  };

  const toggleSelect = (e) => {
    e.currentTarget.classList.toggle("selected");
  };

  const goals = [
    "평생 숙제 다이어트", "뱃살, 옆구리살 빼기", "팔뚝 군살 제거",
    "슬림한 하체 만들기", "벌크업 하기", "넓은 어깨 만들기",
    "굵은 팔 만들기", "탄탄한 몸 만들기", "복근 만들기", "체력향상"
  ];

  return (
    <div>
      <div className="header">
        <div className="progress-container">
          <div className="progress-bar" id="progressBar"></div>
        </div>
      </div>
      <div className="main">
        <h2 className="title">어떤 부분을 초점으로<br />운동하고 싶으신가요?</h2>
        <p className="subtitle">2개 이상 선택해 주세요</p>
        <div className="button-grid">
          {goals.map((goal, index) => (
            <button key={index} className="goal-button" onClick={toggleSelect}>{goal}</button>
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

export default SecondPage;
