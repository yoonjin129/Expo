// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AIScoreEvaluationPage from "./pages/AIScoreEvaluationPage";
import ExercisePage from "./pages/ExercisePage";
import ExerciseChoice from "./pages/ExerciseChoice";
import ExerciseCamera from "./pages/ExerciseCamera";
import "./App.css"; // 전역 스타일

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
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                메인
              </Link>
            </li>
            <li>
              <Link
                to="/exercisechoice"
                style={{ color: "white", textDecoration: "none" }}
              >
                운동 선택
              </Link>
            </li>
            <li>
              <Link
                to="/exercisestart"
                style={{ color: "white", textDecoration: "none" }}
              >
                운동 시작
              </Link>
            </li>
            <li>
              <Link
                to="/exercisefinish"
                style={{ color: "white", textDecoration: "none" }}
              >
                운동 종료
              </Link>
            </li>
            <li>
              <Link
                to="/exercisescore"
                style={{ color: "white", textDecoration: "none" }}
              >
                결과
              </Link>
            </li>
          </ul>
        </nav>

        {/* 라우팅 설정 */}
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* 메인페이지 */}
          <Route path="/exercisechoice" element={<ExerciseChoice />} />
          <Route path="/exercisestart" element={<ExerciseCamera />} />
          <Route path="/exercisefinish" element={<ExercisePage />} />
          <Route path="/exercisescore" element={<AIScoreEvaluationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
