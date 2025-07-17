import React from 'react';
import { BarChart, Bar, XAxis, YAxis, LabelList, ResponsiveContainer } from 'recharts';

// 차트에 표시할 일주일간 칼로리 데이터
const data = [
  { name: '월', cal: 3000 },
  { name: '화', cal: 2500 },
  { name: '수', cal: 2800 },
  { name: '목', cal: 2000 },
  { name: '금', cal: 2600 },
  { name: '토', cal: 2400 },
  { name: '일', cal: 3100 },
];

// 막대 차트 렌더링 메인 컴포넌트
const CalorieChart = () => (
  <ResponsiveContainer width="100%" height={250}>
    <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis ticks={[100, 300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2800]} />
      <Bar dataKey="cal" fill="#4E86F8">
        <LabelList dataKey="cal" position="top" />
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default CalorieChart;
