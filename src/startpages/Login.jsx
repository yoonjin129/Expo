import React from "react";
import { useNavigate } from "react-router-dom";
import "../indexcs.css";

function Login() {
  const navigate = useNavigate();

  const goToLoginForm = () => {
    navigate("/loginform");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <header className="login-header">
          <h1>FitCoach</h1>

          <h4>
            이제 3대 운동,
            <br />
            혼자서도 전문가처럼 안전하고 효과적으로 시작하세요!
          </h4>
        </header>

        <div className="login-buttons">
          <button className="login-button kakao">카카오톡으로 계속하기</button>
          <button className="login-button google">Google로 계속하기</button>
          <button className="login-button default" onClick={goToLoginForm}>
            회원 로그인
          </button>
        </div>

        <div className="login-links">
          <a href="#">회원가입</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
