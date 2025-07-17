import React from "react";
import PancakeImg from "../assets/pancake.png";
import PorkRiceImg from "../assets/porkrice.png";
import ChickenRiceImg from "../assets/chickenrice.png";

// 식단 요약 컴포넌트
const meals = [
  {
    time: "아침",
    food: "팬케이크 & 후라이",
    kcal: 620,
    img: PancakeImg,
  },
  {
    time: "점심",
    food: "제육 덮밥",
    kcal: 750,
    img: PorkRiceImg,
  },
  {
    time: "저녁",
    food: "닭가슴살 & 햇반",
    kcal: 600,
    img: ChickenRiceImg,
  },
];

const FoodSummary = () => (
  <div>
    {meals.map((meal, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // 추가
          marginBottom: "10px",
          padding: "10px 35px",
          border: "1px solid #eee",
          borderRadius: "8px",
        }}
      >
        <img
          src={meal.img}
          alt={meal.food}
          style={{
            width: 60,
            height: 60,
            borderRadius: 8,
            objectFit: "cover",
            marginRight: 12,
          }}
        />
        <div style={{ flex: 1 }}>
          <div>
            <strong>{meal.time}</strong>
          </div>
          <div>{meal.food}</div>
          <div style={{ fontSize: "12px", color: "#888" }}>{meal.kcal}kcal</div>
        </div>
        <div style={{ fontSize: 20, color: "#aaa" }}>{">"}</div>
      </div>
    ))}
  </div>
);

export default FoodSummary;
