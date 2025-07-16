// src/pages/ExercisePage.js
import React, { useState, useEffect } from 'react';
import './ExercisePage.css';

import ExerciseHeader from '../components/ExerciseHeader';
import CoachingMessage from '../components/CoachingMessage';
import CameraFeed from '../components/CameraFeed';
import TimerDisplay from '../components/TimerDisplay'; 
import ScoreBar from '../components/ScoreBar';
import ExerciseInfo from '../components/ExerciseInfo';
import ExerciseControls from '../components/ExerciseControls';

const ExercisePage = () => {
  const [exerciseName, setExerciseName] = useState('스쿼트');
  const [coachingMessage, setCoachingMessage] = useState('자세를 바르게 유지하세요!');
  const [remainingTime, setRemainingTime] = useState(300);
  const [currentScore, setCurrentScore] = useState(75);
  const [currentSet, setCurrentSet] = useState(1);
  const [currentReps, setCurrentReps] = useState(0);
  const [isExercising, setIsExercising] = useState(false);

  useEffect(() => {
    // ... 타이머 로직 ...
  }, [isExercising, remainingTime]);

  const handleStartPause = () => {
    setIsExercising(!isExercising);
    console.log(`운동 ${isExercising ? '일시정지' : '시작'}`);
  };

  const handleEndExercise = () => {
    setIsExercising(false);
    setRemainingTime(300);
    setCurrentSet(1);
    setCurrentReps(0);
    alert('운동이 종료되었습니다!');
    console.log('운동 종료 로직 실행');
  };

  return (
    <div className="exercise-page-container">
      <ExerciseHeader exerciseName={exerciseName} />

      <div className="exercise-main-content">
        {/* CoachingMessage는 CameraFeed 위에 오버레이될 수 있도록 relative/absolute 조합 */}
        <div className="camera-feed-wrapper"> {/* 카메라와 메시지 묶음 */}
          <CoachingMessage message={coachingMessage} /> {/* 여기에 메시지 위치 */}
          <CameraFeed />
        </div>

        {/* AI 점수, 횟수, 남은 시간을 세로로 배치 */}
        <div className="exercise-vertical-info-section">
          <ScoreBar score={currentScore} />
          <ExerciseInfo currentSet={currentSet} currentReps={currentReps} />
          {/* 타이머는 상세페이지2에 없지만, 필요하다고 가정하고 여기에 배치 */}
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