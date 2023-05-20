import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export function getRandomColor() {
  const letters = '456789AB';
  let color = '#';
  for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 8)];
  }
  return color;
}