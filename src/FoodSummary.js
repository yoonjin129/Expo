import React from 'react';

const meals = [
  {
    time: '아침',
    food: '팬케이크 & 후라이',
    kcal: 620,
    img: 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg'
  },
  {
    time: '점심',
    food: '제육 덮밥',
    kcal: 750,
    img: 'https://cdn.pixabay.com/photo/2020/05/11/01/07/rice-5154063_960_720.jpg'
  },
  {
    time: '저녁',
    food: '닭가슴살 & 햇반',
    kcal: 600,
    img: 'https://cdn.pixabay.com/photo/2020/08/11/15/09/chicken-5480987_960_720.jpg'
  },
];

const FoodSummary = () => (
  <div>
    {meals.map((meal, i) => (
      <div key={i} style={{
        display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '10px',
        border: '1px solid #eee', borderRadius: '8px'
      }}>
        <img src={meal.img} alt={meal.food} style={{ width: 60, height: 60, borderRadius: 8, objectFit: 'cover', marginRight: 12 }} />
        <div style={{ flex: 1 }}>
          <div><strong>{meal.time}</strong></div>
          <div>{meal.food}</div>
          <div style={{ fontSize: '12px', color: '#888' }}>{meal.kcal}kcal</div>
        </div>
        <div style={{ fontSize: 20, color: '#aaa' }}>{'>'}</div>
      </div>
    ))}
  </div>
);

export default FoodSummary;
