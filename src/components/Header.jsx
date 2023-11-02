import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useParallaxController } from 'react-scroll-parallax';
import { useLocation } from 'react-router-dom';

import { actions } from '../slices/index.js';
import hooks from '../hooks/index.js';
import background from '../assets/backgrounds/index.js';
import stockBackground from '../assets/backgrounds/back-image-1920.jpg';

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { scrollY } = hooks.useScrollY();
  const location = useLocation();
  const parallaxController = useParallaxController();
  const handleLoad = () => parallaxController.update();

  useEffect(() => {
    parallaxController.update();
  }, [parallaxController, location.pathname]);

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  const translateBanner = `translateY(-${scrollY}px)`;
  const translateLayer = `translateY(calc(${scrollY}px / 2))`;

  return (
    <header id="/" className="main-header bg-light vh-100">
      <picture
        className="parallax-banner"
        style={{ transform: translateBanner }}
      >
        {background.map(({ width, srcSet }) => (
          <source
            key={width}
            media={`(max-width: ${width}px)`}
            type="image/jpeg"
            srcSet={srcSet}
            onLoad={handleLoad}
          />
        ))}
        <img
          src={stockBackground}
          alt={t('alts.background')}
          className="parallax-mirror"
          style={{ transform: translateLayer }}
          onLoad={handleLoad}
        />
      </picture>
      <main className="d-flex flex-column align-items-center">
        <p className="text-content color-light text-center m-0">
          {t('header.text')}
        </p>
        <button
          type="button"
          aria-label={t('ariaLabels.bookingBtn')}
          className="btn-info-booking booking-btn head-booking-btn mb-5 mt-4 rounded-0"
          onClick={handleWidgetShow}
        >
          <span>{t('header.onlineBooking')}</span>
        </button>
      </main>
    </header>
  );
};

export default Header;
