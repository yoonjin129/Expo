import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DietPage.css";
import Header from "../components/Header";
import OatmealImg from "../assets/oatmeal.png";
import VegetableImg from "../assets/vegetable.png";
import ToastImg from "../assets/toast.png";
import YogurtImg from "../assets/yogart.png";
import TofuImg from "../assets/tofu.png";
import Toast2Img from "../assets/toast2.png";
import RicefryImg from "../assets/ricefry.png";
import JagjorimImg from "../assets/Jangjorim.png";
import PastaImg from "../assets/pasta.png";

// 식단 페이지
function DietPage() {
  const navigate = useNavigate();
  const defaultMeals = {
    아침: "팬케이크 & 후라이",
    점심: "제육 덮밥",
    저녁: "닭가슴살 & 햇반",
    간식: "없음",
  };

  const [todayMeals, setTodayMeals] = useState(defaultMeals);
  const [editMode, setEditMode] = useState(false);
  const [editMeals, setEditMeals] = useState(defaultMeals);

  useEffect(() => {
    const saved = localStorage.getItem("todayMeals");
    if (saved) setTodayMeals(JSON.parse(saved));
  }, []);

  const handleEditClick = () => {
    setEditMeals(todayMeals);
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setTodayMeals(editMeals);
    localStorage.setItem("todayMeals", JSON.stringify(editMeals));
    setEditMode(false);
  };

  const handleChange = (meal, value) => {
    setEditMeals((prev) => ({ ...prev, [meal]: value }));
  };

  const handleBackClick = () => {
    navigate("/recordpage");
  };

  const recommendedMeals = {
    아침: [
      {
        title: "귀리죽 + 삶은 달걀 1개 + 사과 한 조각",
        info: "탄수화물: 55g / 단백질: 20g / 지방: 12g",
        time: "약 12분",
        img: OatmealImg,
      },
      {
        title: "통밀 토스트 2장 + 닭가슴살 슬라이스 + 바나나",
        info: "탄수화물: 60g / 단백질: 25g / 지방: 15g",
        time: "약 15분",
        img: ToastImg,
      },
      {
        title: "그릭 요거트 150g + 견과류 한 줌 + 블루베리",
        info: "탄수화물: 50g / 단백질: 20g / 지방: 15g",
        time: "약 5분",
        img: YogurtImg,
      },
    ],
    점심: [
      {
        title: "닭가슴살 샌드위치 + 채소",
        info: "탄수화물: 55g / 단백질: 30g / 지방: 10g",
        time: "약 10분",
        img: Toast2Img,
      },
      {
        title: "통밀 파스타 100g + 닭가슴살 + 토마토 소스",
        info: "탄수화물: 70g / 단백질: 35g / 지방: 15g",
        time: "약 25분",
        img: PastaImg,
      },
      {
        title: "잡곡밥 150g + 돼지고기 볶음 + 채소볶음",
        info: "탄수화물: 60g / 단백질: 35g / 지방: 18g",
        time: "약 25분",
        img: RicefryImg,
      },
    ],
    저녁: [
      {
        title: "닭가슴살 구이 + 고구마 150g + 채소 스팀",
        info: "탄수화물: 60g / 단백질: 35g / 지방: 15g",
        time: "약 20분",
        img: VegetableImg,
      },
      {
        title: "소고기 장조림 + 밥 100g + 나물무침",
        info: "탄수화물: 50g / 단백질: 30g / 지방: 15g",
        time: "약 20분",
        img: JagjorimImg,
      },
      {
        title: "두부조림 + 밥 100g + 김치",
        info: "탄수화물: 55g / 단백질: 25g / 지방: 12g",
        time: "약 15분",
        img: TofuImg,
      },
    ],
  };

  return (
    <div className="container">
      <Header title="식단" showBackButton={true} />

      <section className="today-meals">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>오늘 나의 식단</h3>
          {editMode ? (
            <button className="all-btn" onClick={handleSaveClick}>
              저장
            </button>
          ) : (
            <button className="all-btn" onClick={handleEditClick}>
              수정하기
            </button>
          )}
        </div>
        <div className="meals-row">
          {Object.entries(todayMeals).map(([meal, dish]) => (
            <div key={meal} className="meal-box">
              <div className="meal-title center">{meal}</div>
              {editMode ? (
                <input
                  type="text"
                  value={editMeals[meal]}
                  onChange={(e) => handleChange(meal, e.target.value)}
                  style={{ width: "100%", fontSize: "14px", padding: "5px" }}
                />
              ) : (
                <div className="meal-content center">{dish}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="analysis">
        <div className="analysis-box">
          <h3 className="analysis-title">분석</h3>
          <p className="analysis-text">
            단백질을 충분히 섭취하셨어요!
            <br />
            적절한 지방을 섭취하셨어요!
            <br />
            탄수화물 섭취를 줄여주세요.
          </p>
          <div className="nutrient-bar">
            <div className="nutrient protein">
              <div className="label">단백질</div>
              <div className="gram">190g(35%)</div>
            </div>
            <div className="nutrient carb">
              <div className="label">탄수화물</div>
              <div className="gram">300g(50%)</div>
            </div>
            <div className="nutrient fat">
              <div className="label">지방</div>
              <div className="gram">30g(15%)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="recommend">
        <div className="recommend-header">
          <h3>AI 추천 식단</h3>
          <button className="all-btn">새로고침</button>
        </div>
        {Object.entries(recommendedMeals).map(([mealTime, items]) => (
          <div key={mealTime}>
            <h4>{mealTime}</h4>
            {items.map((item, index) => (
              <div
                key={index}
                className="recommend-card"
                onClick={() =>
                  navigate(`/recipe/${encodeURIComponent(item.title)}`)
                }
                style={{ cursor: "pointer" }}
              >
                <img className="img" src={item.img} alt={item.title} />
                <div className="info">
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.info}</div>
                  <div className="desc">조리 시간: {item.time}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default DietPage;
