import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // Header 컴포넌트 임포트
import exercisePhoto from "../assets/exercisephoto.jpg";

export default function ExerciseCamera() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/exercisefinish");
  };

  return (
    <>
      {" "}
      {/* React Fragment (<></>)를 사용하여 여러 요소를 반환 */}
      <Header title="운동 준비" showBackButton={true} />
      {/* 이 컨테이너는 이제 헤더 아래의 내용만 감쌉니다 */}
      <div style={styles.container}>
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
            <img
              src={exercisePhoto}
              alt="운동 화면"
              style={styles.cameraImage}
            />
          </div>
        </div>

        <div style={styles.buttonWrapper}>
          <button style={styles.startButton} onClick={handleStart}>
            운동 시작하기
          </button>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    width: "90%",
    // maxWidth: 600,
    margin: "0 auto",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    minHeight: "80vh",
    boxSizing: "border-box",
    padding: 20,
    fontFamily: "'Lexend', sans-serif",
  },
  // Header 컴포넌트를 사용하므로, 이 스타일들은 더 이상 필요 없을 수 있습니다.
  // 필요 없다면 styles 객체에서 제거하거나, Header 컴포넌트의 스타일과 충돌하지 않도록 조정해야 합니다.
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
  // 나머지 스타일은 그대로 유지
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
    maxWidth: 540,
    height: 700,
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
  cameraImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 12,
  },
};
