// 추천 콘텐츠 (비디오 썸네일)
// src/components/RecommendedContent.js
import React from 'react';
import './RecommendedContent.css'; 

const RecommendedContent = ({ videos }) => {
  return (
    <div className="recommended-content-section">
      <h2 className="section-title">추천 콘텐츠</h2>
      <div className="video-list-container">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedContent; 