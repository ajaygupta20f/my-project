// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

const rootElement = document.getElementById('root');

// Add Non-Null Assertion (!) to Ensure the Element Exists
if (rootElement) {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
} else {
  console.error("Root element not found");
}
