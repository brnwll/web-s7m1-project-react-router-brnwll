import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// You'll need to wrap <App /> for routing to work
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
