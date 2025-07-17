import React from 'react';
import { useNavigate } from 'react-router-dom';
import DietPage from './DietPage.js';
import Calenderpage from './calenderpage.js';

function HomePage() {
  const navigate = useNavigate();

  const handleButton1Click = () => {
    navigate('/Calenderpage');
  };

  const handleButton2Click = () => {
    navigate('/DietPage');
  };

  return (
 
      <div>
        <button onClick={handleButton1Click}>
          1번 버튼 - 캘린더 & 일정
        </button>
        <button onClick={handleButton2Click}>
          2번 버튼 - 식단 관리
        </button>
      </div>

  );
}

export default HomePage;
