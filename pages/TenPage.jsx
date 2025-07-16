
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../indexcs.css';

const TenPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = "100%";
    }
  }, []);

  const handlePrev = () => {
    navigate('/ninth')
  }

  const handleNext = () => {
    const selected = Array.from(document.querySelectorAll(".goal-button.selected"));
    if (selected.length < 1) {
      alert("하나 이상 선택해주세요.");
      return;
    }
    localStorage.setItem("selectedGoalsStep5", JSON.stringify(selected.map(btn => btn.textContent.trim())));
    navigate('/ten')
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
        <h2 className="title">무릎 대고 푸쉬업<br />몇개나 할 수 있나요?</h2>
        <p className="subtitle">운동 수행 능력은 운동 루틴 추천에 도움이 돼요.<br />
        잘 모른다면 이 질문은 넘어가도 괜찮아요.</p>
        <div className="button-grid vertical-buttons">
            <a href='#' onClick={(e) => {
                e.preventDefault();
                alert('무릎 대고 푸쉬업은 일반 푸쉬업이 어려울 때 무릎을 바닥에 대고 하는 푸쉬업 변형 동작입니다. 팔과 가슴 근육, 코어 근육을 단련하는 데 효과적이며, 초보자나 여성, 노약자도 쉽게 할 수 있는 운동입니다.')
            }}>
                <p className='subtitle' style={{cursor:'pointer', color:'#2D8CFF'}}>
                무릎 대고 푸쉬업은 어떤 운동인가요?</p>
            </a>
          {["10개 이하", "11~20개", "21개 이상", "잘 모르겠어요"].map((level, index) => (
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

export default TenPage;
