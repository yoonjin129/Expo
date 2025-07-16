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
    navigate("/exercise");
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
    maxWidth: 393,
    margin: "0 auto",
    minHeight: "100vh",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    padding: "0 16px",
    fontFamily: "'Lexend', sans-serif",
    boxSizing: "border-box",
  },
  header: {
    padding: "20px 0 12px",
  },
  title: {
    fontSize: "1.125rem", // 18px
    fontWeight: 700,
    color: "#121417",
    margin: 0,
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
  },
  card: {
    flexBasis: "48%", // 2개씩 가로 배치
    marginBottom: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    aspectRatio: "1 / 1", // 정사각형
    borderRadius: 10,
    objectFit: "cover",
    backgroundColor: "#eee",
    marginBottom: 12,
  },
  label: {
    fontSize: "1rem", // 16px
    fontWeight: 500,
    color: "#121417",
    height: 24,
    width: "100%",
  },
};
