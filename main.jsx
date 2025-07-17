
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './indexcs.css';
import ExerciseLevel from './pages/ExerciseLevel';
import ExerciseGoal from './pages/ExerciseGoal';
import MyWeight from './pages/MyWeight';
import ExerciseMachine from './pages/ExerciseMachine';
import ExerciseNumber from './pages/ExerciseNumber';
import WeightTraining from './pages/WeightTraining';
import Login from './pages/Login';
import LoginForm from './pages/LoginForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/exerciselevel" element={<ExerciseLevel />} />
        <Route path="/myweight" element={<MyWeight />} />
        <Route path="/exercisemachine" element={<ExerciseMachine />} />
        <Route path="/exercisenumber" element={<ExerciseNumber />} />
        <Route path="/weighttraining" element={<WeightTraining />} />
        <Route path="/exercisegoal" element={<ExerciseGoal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginform" element={<LoginForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
