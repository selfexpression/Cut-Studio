import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Provider } from 'react-redux';
import store from './slices/index.js';
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

  // const runMap = () => {
  //   const scriptAPI = document.createElement('script');
  //   scriptAPI.src = 'https://api-maps.yandex.ru/v3/?apikey=e7996c41-fbf6-430d-a78d-4f21af4455ca&lang=ru_RU';
  //   document.head.appendChild(scriptAPI);

  //   const scriptInit = document.createElement('script');
  //   scriptInit.type = 'text/javascript';
  //   scriptInit.innerHTML = `
  //       async function initMap() {
  //           await ymaps3.ready;

  //           const {YMap, YMapDefaultSchemeLayer} = ymaps3;

  //           const map = new YMap(
  //               document.getElementById('map'),
  //               {
  //                   location: {
  //                     center: [55.025854, 82.931218],
  //                     zoom: 14
  //                   }
  //               }
  //           );

  //           map.addChild(new YMapDefaultSchemeLayer());
  //       }

  //       initMap();
  //   `;

  //   if (document.contains(scriptAPI)) {
  //     document.head.appendChild(scriptInit);
  //   }
  // };

  // runMap();

  const mountNode = document.getElementById('root');
  const root = ReactDOM.createRoot(mountNode);

  root.render(
    <React.StrictMode>
      <ParallaxProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ParallaxProvider>
    </React.StrictMode>,
  );
};

export default runApp;

reportWebVitals();
