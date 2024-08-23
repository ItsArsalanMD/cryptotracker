import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Crypto from './context/crypto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crypto>
      <App />
    </Crypto>
  </React.StrictMode>
);