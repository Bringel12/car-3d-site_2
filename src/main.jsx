// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // ← Adicione esta linha
<img
  src="/models/carro.png"
  alt="Carro"
  style={{
    width: "800px",
    display: "block",
    margin: "0 auto"
  }}
/>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);