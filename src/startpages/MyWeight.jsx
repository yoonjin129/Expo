import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../indexcs.css";

const MyWeight = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = "48%";
    }
  }, []);

  const handlePrev = () => {
    navigate("/exercisegoal");
  };

  const handleNext = () => {
    navigate("/exercisemachine");
  };

  // const toggleSelect = (e) => {
  //   e.currentTarget.classList.toggle("selected");
  // };

  return (
    <div>
      <div className="header">
        <div className="progress-container">
          <div className="progress-bar" id="progressBar"></div>
        </div>
      </div>
      <div className="main">
        <h2 className="title">목표 몸무게가 어떻게 되시나요?</h2>
        <p className="subtitle">
          몸무게 관리가 필요 없으신 분들은 넘어가셔도 돼요.
        </p>
        <div className="weight-input-container">
          <input
            type="number"
            id="targetWeight"
            name="targetWeight"
            placeholder=""
            min={1}
            max={500}
            className="weight-input"
          />
          <span className="kg-label">kg</span>
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

export default MyWeight;
