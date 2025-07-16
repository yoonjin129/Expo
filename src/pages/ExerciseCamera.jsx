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
          운동을 진행할때 몸 전체가 보일 수 있게 화면을 조정 하세요.
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
    width: "100%",
    maxWidth: "390px",
    minHeight: "844px",
    margin: "0 auto",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "16px",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Lexend, sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#121417",
  },
  subHeader: {
    padding: "20px 16px 12px",
    textAlign: "center",
  },
  heading: {
    fontFamily: "Lexend, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "35px",
    color: "#121417",
    margin: 0,
  },
  subTextWrapper: {
    padding: "4px 16px 12px",
    textAlign: "center",
  },
  subText: {
    fontFamily: "Lexend, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#121417",
    margin: 0,
  },
  cameraBoxWrapper: {
    padding: "16px",
    display: "flex",
    justifyContent: "center",
  },
  cameraBox: {
    width: "100%",
    maxWidth: "358px",
    height: "537px",
    borderRadius: "8px",
    backgroundColor: "#F0F2F5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraLabel: {
    fontFamily: "Lexend, sans-serif",
    fontSize: "16px",
    fontWeight: 500,
    color: "#000",
  },
  buttonWrapper: {
    padding: "12px 16px",
    display: "flex",
    justifyContent: "center",
  },
  startButton: {
    backgroundColor: "#AECBEB",
    border: "none",
    borderRadius: "8px",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: 700,
    fontFamily: "Lexend, sans-serif",
    color: "#000",
    cursor: "pointer",
  },
};
