import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../indexcs.css";

const ExerciseGoal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = "32%";
    }
  }, []);

  const handlePrev = () => {
    navigate("/exerciselevel");
  };

  const handleNext = () => {
    const selected = Array.from(
      document.querySelectorAll(".goal-button.selected")
    );
    if (selected.length < 1) {
      alert("하나 이상 선택해주세요.");
      return;
    }
    localStorage.setItem(
      "selectedGoalsStep1",
      JSON.stringify(selected.map((btn) => btn.textContent.trim()))
    );
    navigate("/myweight");
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
        <h2 className="title">
          운동 시작 전,
          <br />
          가장 중요한 목표는 무엇인가요?
        </h2>
        <p className="subtitle">언제든지 변경할 수 있어요.</p>
        <div className="button-grid vertical-buttons">
          {[
            "웨이트 입문",
            "다이어트",
            "벌크업",
            "린매스업",
            "대회 준비",
            "건강한 습관 만들기",
          ].map((level, index) => (
            <button
              key={index}
              className="goal-button level-button"
              onClick={toggleSelect}
            >
              <strong>{level}</strong>
              <br />
              <span className="desc">
                {
                  [
                    "웨이트 트레이닝을 시작하는데 기초를 다져요.",
                    "체중을 감량하고 건강한 체형을 만들어요.",
                    "근육량과 더 큰 몸을 만들고 싶어요.",
                    "근육량은 늘리고 체지방은 내린 멋진 몸을 만들고 싶어요.",
                    "대회 준비를 해요.",
                    "꾸준하게 실천할 수 있는 습관을 만들어요.",
                  ][index]
                }
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="arrow-buttons">
        <button className="arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ExerciseGoal;
