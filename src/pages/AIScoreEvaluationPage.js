// src/pages/AIScoreEvaluationPage.js
import React from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import profileImg from "../assets/profile.png";
import ScoreSummary from "../components/ScoreSummary";
import FeedbackMessage from "../components/FeedbackMessage";
import ImprovementTips from "../components/ImprovementTips";
import ActionButtons from "../components/ActionButtons";

// 가상의 데이터 (나중에 실제 데이터로 대체될 부분)
const userData = {
  name: "카르페디엠",
  status: "하루 운동 목표량 완료",
  avatar: profileImg, // 임시 이미지
};

const scoreData = {
  averageScore: 85,
  totalReps: 80,
  exerciseTime: "10분",
};

const feedbackText =
  "카르페디엠님의 자세는 전반적으로 양호했지만 개선의 여지가 있습니다. 운동하는 동안 등을 곧게 펴고 코어를 움직이도록 집중하세요.";

const improvementTips = [
  { id: 1, text: "코어를 잘 잡으세요", checked: false },
  { id: 2, text: "등을 곧게 유지하세요", checked: false },
  { id: 3, text: "흔들림을 줄일 필요가 있습니다", checked: false },
];

const AIScoreEvaluationPage = () => {
  return (
    <div className="ai-score-evaluation-page-container">
      <Header title="AI 점수 평가" showBackButton={true} />

      <main className="content-area">
        <UserProfile {...userData} />
        <ScoreSummary {...scoreData} />
        <FeedbackMessage message={feedbackText} />
        <ImprovementTips tips={improvementTips} />
      </main>

      <ActionButtons
        onSave={() => console.log("저장하기")}
        onShare={() => console.log("공유하기")}
      />
    </div>
  );
};

export default AIScoreEvaluationPage;
