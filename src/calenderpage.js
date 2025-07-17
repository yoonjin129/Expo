import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './calenderpage.css';

function Calenderpage() {
  const today = new Date(2025, 7, 15);
  const navigate = useNavigate();
  
  // 사용자가 클릭한 날짜 저장하기
  const [clickedDate, setClickedDate] = useState(5);

  const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  
  const workoutList = [
    { id: 1, name: '모닝 런', time: '10:00 AM' },
    { id: 2, name: '점심 식사', time: '12:00 PM' },
    { id: 3, name: '근력 운동', time: '2:00 PM' },
    { id: 4, name: '저녁 식사', time: '6:00 PM' },
  ];

  // 캘린더에 표시할 날짜들 만들기
  function makeCalendarDays() {
    const year = today.getFullYear();
    const month = today.getMonth();
    
    // 이번 달 첫날과 마지막날
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const startWeekday = firstDay.getDay();
    
    // 이번 달이 며칠까지 있는지
    const totalDays = lastDay.getDate();

    // 빈 배열 만들기
    const allDays = [];
    
    for (let i = 0; i < startWeekday; i++) {
      allDays.push(null);
    }
    
    for (let day = 1; day <= totalDays; day++) {
      allDays.push(day);
    }
    
    return allDays;
  }

  // 날짜를 클릭했을 때 실행되는 함수
  function handleDayClick(day) {
    if (day) {
      setClickedDate(day);
    }
  }

  // 뒤로가기 버튼 클릭 함수
  const handleBackClick = () => {
    navigate('/recordpage');
  };

  // 캘린더 날짜들 가져오기
  const calendarDays = makeCalendarDays();

  return (
    <div className="app">
      {/* 제목 부분 */}
      <header className="header">
        <div className="header-content">
          <button className="back-button" onClick={handleBackClick}>
            ←
          </button>
          <h1 className="title">캘린더</h1>
        </div>
      </header>

      <main>
        {/* 캘린더 영역 */}
        <section className="calendar">
          <div className="calendar-wrapper">
            {/* 년월 표시 */}
            <div className="month-header">
              <p className="month-title">
                {today.getFullYear()}년 {monthNames[today.getMonth()]}
              </p>
            </div>

            {/* 캘린더 격자 */}
            <div className="grid">
              {dayNames.map((dayName, index) => (
                <p key={index} className="weekday">
                  {dayName}
                </p>
              ))}
              
              {/* 날짜 버튼들 */}
              {calendarDays.map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleDayClick(day)}
                  className="day-btn"
                  disabled={!day}
                >
                  {day && (
                    <div className={day === clickedDate ? 'day selected' : 'day'}>
                      {day}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 운동 목록 영역 */}
        <section className="activities">
          <h3 className="activities-title">오늘</h3>
          {workoutList.map((workout) => (
            <div key={workout.id} className="activity">
              <div className="content">
                <p className="title">{workout.name}</p>
                <p className="time">{workout.time}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Calenderpage;
