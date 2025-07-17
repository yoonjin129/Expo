import React, { useState } from 'react';

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
