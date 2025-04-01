import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Welcome to My App</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>A beautiful React app experience</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <button onClick={() => navigate('/signin')} style={buttonStyle}>로그인</button>
        <button onClick={() => navigate('/signup')} style={buttonStyle}>회원가입</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#4caf50',
  color: '#fff',
  cursor: 'pointer'
};
