import React from "react";
import { useNavigate } from "react-router-dom";
import deadliftImg from "../assets/deadlift.png";
import benchpressImg from "../assets/benchpress.png";
import squatImg from "../assets/squat.png";
import pushupImg from "../assets/pushup.png";
import situpImg from "../assets/situp.png";
import pullupImg from "../assets/pullup.png";

const exercises = [
  { name: "데드리프트", image: deadliftImg },
  { name: "벤치프레스", image: benchpressImg },
  { name: "스쿼트", image: squatImg },
  { name: "팔굽혀펴기", image: pushupImg },
  { name: "윗몸 일으키기", image: situpImg },
  { name: "턱걸이", image: pullupImg },
];

export default function ExerciseChoice() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/camera");
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>PT 받을 운동을 선택하세요</h1>
      </header>
      <div style={styles.grid}>
        {exercises.map((exercise, index) => (
          <div key={index} style={styles.card} onClick={handleClick}>
            <img
              src={exercise.image}
              alt={exercise.name}
              style={styles.image}
            />
            <div style={styles.label}>{exercise.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    maxWidth: 960, // 데스크탑 기준 최대 너비
    margin: "0 auto",
    minHeight: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "20px", // 여백 좀 더 넉넉하게
    fontFamily: "'Lexend', sans-serif",
    boxSizing: "border-box",
  },
  header: {
    paddingBottom: 16,
  },
  title: {
    fontSize: "1.5rem", // 좀 더 크고 선명하게
    fontWeight: 700,
    color: "#121417",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3개 고정 배치
    gap: 20,
  },
  card: {
    cursor: "pointer",
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    transition: "transform 0.2s ease",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  image: {
    width: "100%",
    height: "220px", // 기존 180px에서 좀 더 크게
    objectFit: "cover",
    borderRadius: 10,
    marginBottom: 12,
  },
  label: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#121417",
    textAlign: "center",
  },
};
