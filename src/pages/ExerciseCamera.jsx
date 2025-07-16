import React from "react";

export default function ExerciseCamera() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>운동 준비</span>
      </div>

      <div style={styles.subHeader}>
        <p style={styles.heading}>올바른 위치를 선택하세요</p>
      </div>

      <div style={styles.subTextWrapper}>
        <p style={styles.subText}>
          운동을 진행할 때 몸 전체가 보일 수 있게 화면을 조정하세요.
        </p>
      </div>

      <div style={styles.cameraBoxWrapper}>
        <div style={styles.cameraBox}>
          <span style={styles.cameraLabel}>카메라 화면</span>
        </div>
      </div>

      <div style={styles.buttonWrapper}>
        <button style={styles.startButton}>운동 시작하기</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "90%",
    maxWidth: 600, // 웹에서 보기 좋은 최대 너비로 변경
    margin: "0 auto",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    minHeight: "80vh", // 너무 작지 않게 최소 높이 지정
    boxSizing: "border-box",
    padding: 20,
    fontFamily: "'Lexend', sans-serif",
  },
  header: {
    padding: "16px 0",
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: "#121417",
  },
  subHeader: {
    padding: "10px 0 8px",
    textAlign: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 1.2,
    color: "#121417",
    margin: 0,
  },
  subTextWrapper: {
    padding: "6px 0 16px",
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#121417",
    margin: 0,
  },
  cameraBoxWrapper: {
    padding: 16,
    display: "flex",
    justifyContent: "center",
  },
  cameraBox: {
    width: "100%",
    maxWidth: 540, // 더 넓게
    height: 480, // 비율 적당히 맞춤
    borderRadius: 12,
    backgroundColor: "#F0F2F5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    color: "#555",
    userSelect: "none",
  },
  cameraLabel: {
    fontWeight: 500,
  },
  buttonWrapper: {
    padding: "16px 0",
    display: "flex",
    justifyContent: "center",
  },
  startButton: {
    backgroundColor: "#AECBEB",
    border: "none",
    borderRadius: 10,
    padding: "14px 28px",
    fontSize: 18,
    fontWeight: 700,
    color: "#000",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};
