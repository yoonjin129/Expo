// 주간 날짜 슬라이더 컴포넌트 - 일주일간의 날짜를 가로로 표시
import React, { useState } from 'react';

// 현재 주의 모든 날짜 정보를 계산하는 함수
const getWeekDates = () => {
  const today = new Date();
  const start = today.getDate() - today.getDay();
  return [...Array(7)].map((_, i) => {
    const d = new Date(today.setDate(start + i));
    return {
      label: ['일', '월', '화', '수', '목', '금', '토'][d.getDay()],
      date: d.getDate(),
      isToday: new Date().toDateString() === d.toDateString(),
      isHoliday: d.getDay() === 0 || d.getDay() === 6,
    };
  });
};

// 날짜 선택 슬라이더 메인 컴포넌트
const DaySlider = () => {
  const [selected, setSelected] = useState(new Date().getDate());
  const days = getWeekDates();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '12px 0' }}>
      {days.map((day, i) => (
        <div
          key={i}
          onClick={() => setSelected(day.date)}
          style={{
            textAlign: 'center',
            color: day.isHoliday ? 'red' : 'black',
            fontWeight: selected === day.date ? 'bold' : 'normal',
            cursor: 'pointer'
          }}
        >
          <div>{day.label}</div>
          <div>{day.date}</div>
        </div>
      ))}
    </div>
  );
};

export default DaySlider;
