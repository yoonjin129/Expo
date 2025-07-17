import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../indexcs.css';

function LoginForm() {

    const navigate = useNavigate();
    
    const goToExerciseLevel = () => {
    navigate('/exerciselevel');
  }

  return (
    <div className="login-container">
      <div className='login-form'>
        <header className="login-header">
          <h1>FitCoach</h1>

          <h4>이제 3대 운동,<br/>혼자서도 전문가처럼 안전하고 효과적으로 시작하세요!</h4>
        </header>

        <div className="login-buttons">
            <input type="text" placeholder="아이디" className='login-input'/>
            <input type='password' placeholder='비밀번호' className='login-input'/>
          <button className="login-button default" onClick={goToExerciseLevel}>로그인</button>
        </div>

        <div className="login-links">
          <a href="#">아이디찾기</a>
          <span>|</span>
          <a href="#">비밀번호찾기</a>
        </div>

        
      </div>
    </div>
  );
};

export default LoginForm;
