// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AIScoreEvaluationPage from './pages/AIScoreEvaluationPage';
import ExercisePage from './pages/ExercisePage';
import './App.css'; // 전역 스타일 (필요하다면)

function App() {
  return (
    <Router>
      <div className="App">
        {/* 임시 네비게이션 링크 (이게 보이도록 할 것입니다) */}
        <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <li><Link to="/score" style={{ color: 'white', textDecoration: 'none' }}>AI 점수 평가 페이지</Link></li>
            <li><Link to="/exercise" style={{ color: 'white', textDecoration: 'none' }}>운동 페이지</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AIScoreEvaluationPage />} />
          <Route path="/score" element={<AIScoreEvaluationPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;