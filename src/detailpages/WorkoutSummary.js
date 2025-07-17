import React from "react";
import deadliftImg from "../assets/deadlift.png";
import benchpressImg from "../assets/benchpress.png";
import squatImg from "../assets/squat.png";

const workouts = [
  { name: "데드리프트", weight: 50, sets: "15x15", img: deadliftImg },
  { name: "벤치프레스", weight: 50, sets: "15x15", img: benchpressImg },
  { name: "스쿼트", weight: 50, sets: "15x15", img: squatImg },
];

const WorkoutSummary = () => (
  <div style={{ margin: "0 16px" }}>
    {workouts.map((w, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          padding: "10px 16px",
          border: "1px solid #eee",
          borderRadius: "8px",
          cursor: "pointer", // 식단쪽에 없지만 있으면 UX 좋아짐
          position: "relative",
        }}
      >
        <img
          src={w.img}
          alt={w.name}
          style={{
            width: 60,
            height: 60,
            borderRadius: 8,
            objectFit: "cover",
            marginLeft: 0,
            marginRight: 16,
          }}
        />
        <div style={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",

          }}>
          <div>
            <strong>{w.name}</strong>
          </div>
          <div>무게: {w.weight}</div>
          <div>세트: {w.sets}</div>
        </div>
        <button style={{ fontSize: 20, color: "#aaa", position: "absolute", right: "20px", border: "none", background: "none" }}>{">"}</button>
      </div>
    ))}
  </div>
);

export default WorkoutSummary;
