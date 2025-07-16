// src/components/UserProfile.js
// 프로필 이미지, 사용자 이름, 목표 달성 
import React from 'react';
import './UserProfile.css'; 

const UserProfile = ({ name, status, avatar }) => {
  return (
    <div className="user-profile-container">
      <img src={avatar} alt="Profile" className="user-avatar" />
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-status">{status}</p>
      </div>
    </div>
  );
};

export default UserProfile;