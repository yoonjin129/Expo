import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ExercisePage.css";

import ExerciseHeader from "../components/ExerciseHeader";
import CoachingMessage from "../components/CoachingMessage";
import CameraFeed from "../components/CameraFeed";
import TimerDisplay from "../components/TimerDisplay";
import ScoreBar from "../components/ScoreBar";
import ExerciseInfo from "../components/ExerciseInfo";
import ExerciseControls from "../components/ExerciseControls";

const ExercisePage = () => {
  const [exerciseName, setExerciseName] = useState("스쿼트");
  const [coachingMessage, setCoachingMessage] =
    useState("자세를 바르게 유지하세요!");
  const [remainingTime, setRemainingTime] = useState(300);
  const [currentScore, setCurrentScore] = useState(75);
  const [currentSet, setCurrentSet] = useState(1);
  const [currentReps, setCurrentReps] = useState(0);
  const [isExercising, setIsExercising] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    // ... 타이머 로직 ...
  }, [isExercising, remainingTime]);

  const handleStartPause = () => {
    setIsExercising(!isExercising);
    console.log(`운동 ${isExercising ? "일시정지" : "시작"}`);
  };

  const handleEndExercise = () => {
    setIsExercising(false);
    setRemainingTime(300);
    setCurrentSet(1);
    setCurrentReps(0);
    console.log("운동 종료 로직 실행");

    navigate("/exercisescore");
  };

  return (
    <div className="exercise-page-container">
      <ExerciseHeader exerciseName={exerciseName} />

      <div className="exercise-main-content">
        <div className="camera-feed-wrapper">
          <CoachingMessage message={coachingMessage} />
          <CameraFeed />
        </div>

        <div className="exercise-vertical-info-section">
          <ScoreBar score={currentScore} />
          <ExerciseInfo currentSet={currentSet} currentReps={currentReps} />
          <TimerDisplay remainingTime={remainingTime} />
        </div>
      </div>

      <ExerciseControls
        isExercising={isExercising}
        onStartPause={handleStartPause}
        onEndExercise={handleEndExercise}
      />
    </div>
  );
};

export default ExercisePage;
