import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AIScoreEvaluationPage from "./pages/AIScoreEvaluationPage";
import ExercisePage from "./pages/ExercisePage";
import ExerciseChoice from "./pages/ExerciseChoice";
import ExerciseCamera from "./pages/ExerciseCamera";

import ExerciseLevel from "./startpages/ExerciseLevel";
import ExerciseGoal from "./startpages/ExerciseGoal";
import MyWeight from "./startpages/MyWeight";
import ExerciseMachine from "./startpages/ExerciseMachine";
import ExerciseNumber from "./startpages/ExerciseNumber";
import WeightTraining from "./startpages/WeightTraining";

import Login from "./startpages/Login";
import LoginForm from "./startpages/LoginForm";

import RecordPage from "./detailpages/RecordPage";
import Calenderpage from "./detailpages/calenderpage";
import DietPage from "./detailpages/DietPage";
import RecipePage from "./detailpages/RecipePage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation 삭제됨 */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/exercisechoice" element={<ExerciseChoice />} />
          <Route path="/exercisestart" element={<ExerciseCamera />} />
          <Route path="/exercisefinish" element={<ExercisePage />} />
          <Route path="/exercisescore" element={<AIScoreEvaluationPage />} />
          <Route path="/exerciselevel" element={<ExerciseLevel />} />
          <Route path="/exercisegoal" element={<ExerciseGoal />} />
          <Route path="/myweight" element={<MyWeight />} />
          <Route path="/exercisemachine" element={<ExerciseMachine />} />
          <Route path="/exercisenumber" element={<ExerciseNumber />} />
          <Route path="/weighttraining" element={<WeightTraining />} />
          <Route path="/calenderpage" element={<Calenderpage />} />
          <Route path="/dietpage" element={<DietPage />} />
          <Route path="/recordpage" element={<RecordPage />} />
          <Route path="/recipe/:title" element={<RecipePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginform" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
