// 운동 요약 컴포넌트 - 데드리프트, 벤치프레스, 스쿼트 운동 기록 표시
import React from 'react';

// 운동 요약 컴포넌트
const workouts = [
  { name: '데드리프트', weight: 50, sets: '15x15', img: 'https://cdn.pixabay.com/photo/2017/10/10/21/46/fitness-2830771_960_720.png' },
  { name: '벤치프레스', weight: 50, sets: '15x15', img: 'https://cdn.pixabay.com/photo/2017/10/10/21/47/gym-2830780_960_720.png' },
  { name: '스쿼트', weight: 50, sets: '15x15', img: 'https://cdn.pixabay.com/photo/2017/10/10/21/47/workout-2830784_960_720.png' },
];

const WorkoutSummary = () => (
  <div>
    {workouts.map((w, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #eee' }}>
        <img src={w.img} alt={w.name} style={{ width: 60, height: 60, objectFit: 'contain', marginRight: 12 }} />
        <div>
          <div><strong>{w.name}</strong></div>
          <div>무게 {w.weight}</div>
          <div>세트 {w.sets}</div>
        </div>
      </div>
    ))}
  </div>
);

export default WorkoutSummary;
