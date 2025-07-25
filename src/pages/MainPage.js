// src/pages/MainPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

import folderIcon from "../assets/folder.png";
import timerIcon from "../assets/timer.png";
import userIcon from "../assets/user.png";
import profileIcon from "../assets/profile.png";
import homeIcon from "../assets/home.png";
import calendarIcon from "../assets/calendar.png";

const MainPage = () => {
  const navigate = useNavigate();

  const goToExercise = () => {
    navigate("/exercisechoice");
  };

  const goToRecord = () => {
    navigate("/RecordPage");
  };

  const goToDiet = () => {
    navigate("/dietpage"); // 여기만 바꿨어요!
  };

  return (
    <>
      {/* 메인 콘텐츠 */}
      <div className="container">
        {/* 추천 기능 */}
        <section className="feature-section">
          <div className="feature-buttons">
            <h3>추천 기능</h3>
            <div className="button-group">
              <button>
                <img
                  src={folderIcon}
                  alt="루틴 아이콘"
                  className="button-icon"
                />
                루틴
              </button>
              <button>
                <img
                  src={timerIcon}
                  alt="타이머 아이콘"
                  className="button-icon"
                />
                인터벌 타이머
              </button>
            </div>
          </div>
        </section>

        {/* 운동, 기록, 식단 */}
        <section className="category-section">
          <button className="category" onClick={goToExercise}>
            운동
          </button>
          <button className="category" onClick={goToRecord}>
            기록
          </button>
          <button className="category" onClick={goToDiet}>
            식단
          </button>
        </section>

        {/* 운동 변화 그래프 */}
        <section className="graph-section">
          <h4 className="graph-title">운동 변화</h4>
          <div className="graph-box">
            {[20, 40, 60, 80, 50, 30, 10].map((value, idx) => (
              <div
                className="bar"
                key={idx}
                style={{ height: `${(value / 100) * 600}px` }} // 100이 최대값일 때 600px 기준 비율로 높이 조절
              ></div>
            ))}
          </div>
        </section>

        {/* 주간 랭킹 */}
        <section className="ranking-section">
          <h4 className="ranking-title">주간 랭킹</h4>
          <div className="ranking-box">
            <div className="top-rank">
              <span className="top-rank-label">TOP 1</span>
              <img src={profileIcon} alt="Top user" className="rank-avatar" />
              <span className="top-name">김윤진</span>
              <span className="top-score">285</span>
            </div>
            <hr className="divider" />
            <ul className="rank-list">
              {[
                { rank: 2, name: "김선민", score: 120 },
                { rank: 3, name: "정아인", score: 110 },
                { rank: 4, name: "탁하나", score: 109 },
                { rank: 5, name: "현예진", score: 105 },
              ].map(({ rank, name, score }) => (
                <li key={rank}>
                  <div className="rank-left">
                    <span className="rank-num">{rank}</span>
                    <img src={profileIcon} alt="user" />
                    <span className="rank-name">{name}</span>
                  </div>
                  <span className="rank-score">{score}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 추천 콘텐츠 */}
        <section className="content">
          <h4 className="recommend-title">추천 콘텐츠</h4>
          <div className="contents">
            {["l4THcKL-sPM", "CnLZUXQofiI", "F6MI5hkLNEk", "r1QapH1SIAI"].map(
              (id) => (
                <iframe
                  key={id}
                  src={`https://www.youtube.com/embed/${id}`}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )
            )}
          </div>
        </section>

        {/* 하단 네비게이션 */}
        <nav className="bottom-nav">
          <button className="nav-btn active">
            <img src={homeIcon} alt="홈" width="40" height="40" />
          </button>
          <button className="nav-btn" onClick={() => navigate("/calenderpage")}>
            <img src={calendarIcon} alt="캘린더" width="40" height="40" />
          </button>
          <button className="nav-btn" onClick={() => navigate("/recordpage")}>
            <img src={userIcon} alt="유저" width="40" height="40" />
          </button>
        </nav>
      </div>
    </>
  );
};

export default MainPage;
