import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DietPage from './DietPage';
import RecipePage from './RecipePage'; // ✅ 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DietPage />} />
        <Route path="/recipe/:title" element={<RecipePage />} /> {/* ✅ 레시피 페이지 라우팅 */}
      </Routes>
    </Router>
  );
}

export default App;
