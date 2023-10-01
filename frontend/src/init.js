import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import App from './components/App.jsx';
import resources from './locales/index.js';
import reportWebVitals from './reportWebVitals.js';

const runApp = async () => {
  const i18n = i18next.createInstance();

  await i18n
    .use(initReactI18next)
    // .use(LanguageDetector)
    .init({
      resources,
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false,
      },
    });

  const mountNode = document.getElementById('root');
  const root = ReactDOM.createRoot(mountNode);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

export default runApp;

reportWebVitals();