import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  // </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

