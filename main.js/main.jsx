
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './indexcs.css';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
import SixthPage from './pages/SixthPage';
import SeventhPage from './pages/SeventhPage';
import EighthPage from './pages/EighthPage.jsx';
import NinthPage from './pages/NinthPage';
import TenPage from './pages/TenPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
        <Route path="/fifth" element={<FifthPage />} />
        <Route path="/sixth" element={<SixthPage />} />
        <Route path="/seventh" element={<SeventhPage />} />
        <Route path="/eighth" element={<EighthPage />} />
        <Route path="/ninth" element={<NinthPage />} />
        <Route path="/ten" element={<TenPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
