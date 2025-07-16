import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../indexcs.css';

const ThirdPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = "30%";
    }
  }, []);

  const handlePrev = () => {
    navigate('/second')
  }

  const handleNext = () => {
    navigate('/fourth');
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
        <h2 className="title">목표 몸무게가 어떻게 되시나요?</h2>
        <div>
          <input type="number"
          id="targetWeight"
          name='targetWeight'
          placeholder=''
          min={1}
          max={500}
          className='weight-input'
          />
          <span className='kg-label'>kg</span>
        </div>
      </div>
      <div className="arrow-buttons">
        <button className="arrow" onClick={handlePrev}>&#8249;</button>
        <button className="arrow" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default ThirdPage;
