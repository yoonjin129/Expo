import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExerciseChoice from "./pages/ExerciseChoice";
import ExerciseCamera from "./pages/ExerciseCamera";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExerciseChoice />} />
        <Route path="/exercise" element={<ExerciseCamera />} />
      </Routes>
    </Router>
  );
}

export default App;
