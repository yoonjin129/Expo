import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecordPage.css';
import DaySlider from './DaySlider';
import CalorieChart from './CalorieChart';
import WorkoutSummary from './WorkoutSummary';
import FoodSummary from './FoodSummary';

const RecordPage = () => {
  const navigate = useNavigate();

  return (
    <div className="record-page">
      <div className="header">
        <span className="back-arrow" onClick={() => navigate('/')}>&#x2039;</span>
        <h2>기록</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0' }}>
        <span>2025년 8월 15일</span>
        <button onClick={() => navigate('/calenderpage')} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>
          &gt;
        </button>
      </div>
      
      <DaySlider />

      <section className="nutrition-section">
        <h3 className="section-title">목표 영양성분</h3>
        <div className="calorie-card">
          <div>
            <p className="calorie-value">1800</p>
            <p className="calorie-label">목표 칼로리</p>
          </div>
          <div className="circle-wrap">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
          </div>
        </div>
        <div className="macro-cards">
          {[
            { label: '목표 단백질', value: '150g' },
            { label: '목표 탄수화물', value: '180g' },
            { label: '목표 지방', value: '50g' },
          ].map((item, i) => (
            <div key={i} className="macro-card">
              <p className="macro-value">{item.value}</p>
              <p className="macro-label">{item.label}</p>
              <div className="mini-circle-wrap">
                <div className="outer-circle">
                  <div className="inner-circle"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="chart-section">
        <h3 className="section-title">칼로리 기록</h3>
        <CalorieChart />
      </section>

      <section className="section">
        <h3 className="section-title">운동 기록</h3>
        <WorkoutSummary />
      </section>

      <section className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 className="section-title">식단 기록</h3>
          <button onClick={() => navigate('/DietPage')} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>
            &gt;
          </button>
        </div>
        <FoodSummary />
      </section>
    </div>
  );
};

export default RecordPage;