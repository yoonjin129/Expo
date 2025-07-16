// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AIScoreEvaluationPage from "./pages/AIScoreEvaluationPage";
import ExercisePage from "./pages/ExercisePage";
import ExerciseChoice from "./pages/ExerciseChoice";
import ExerciseCamera from "./pages/ExerciseCamera";
import "./App.css"; // 전역 스타일 (필요하면 유지)

function App() {
  return (
    <Router>
      <div className="App">
        {/* 네비게이션 바 */}
        <nav
          style={{
            padding: "10px",
            backgroundColor: "#333",
            color: "white",
            textAlign: "center",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <li>
              <Link
                to="/score"
                style={{ color: "white", textDecoration: "none" }}
              >
                AI 점수 평가
              </Link>
            </li>
            <li>
              <Link
                to="/exercise"
                style={{ color: "white", textDecoration: "none" }}
              >
                운동 페이지
              </Link>
            </li>
            <li>
              <Link
                to="/choice"
                style={{ color: "white", textDecoration: "none" }}
              >
                운동 선택
              </Link>
            </li>
            <li>
              <Link
                to="/camera"
                style={{ color: "white", textDecoration: "none" }}
              >
                운동 카메라
              </Link>
            </li>
          </ul>
        </nav>

        {/* 라우팅 설정 */}
        <Routes>
          <Route path="/" element={<AIScoreEvaluationPage />} />
          <Route path="/score" element={<AIScoreEvaluationPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/choice" element={<ExerciseChoice />} />
          <Route path="/camera" element={<ExerciseCamera />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
