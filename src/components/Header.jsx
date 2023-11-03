import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useParallaxController } from 'react-scroll-parallax';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useMediaQuery } from '@reactuses/core';
import { actions } from '../slices/index.js';
import hooks from '../hooks/index.js';
import background from '../assets/backgrounds/index.js';
import stockBackground from '../assets/backgrounds/back-image-1920.jpg';

const Background = () => {
  const { t } = useTranslation();
  const { scrollY } = hooks.useScrollY();
  const location = useLocation();
  const parallaxController = useParallaxController();
  const isWide = useMediaQuery('(min-width: 660px)');
  const handleLoad = () => parallaxController.update();

  useEffect(() => {
    parallaxController.update();
  }, [parallaxController, location.pathname]);

  const translateBanner = `translate3d(0px, -${scrollY}px, 0px)`;
  const translateLayer = `translate3d(0px, calc(${scrollY}px / 1.5), 0px)`;

  return (
    <picture
      className="parallax-banner parallax-wrapper banner"
      style={isWide ? { transform: translateBanner } : null}
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
        className="parallax-layer parallax-wrapper layer"
        style={isWide ? { transform: translateLayer } : null}
        onLoad={handleLoad}
      />
    </picture>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isVibrating, setVibrating] = useState(false);
  const buttonClasses = cn(
    'btn-info-booking',
    'booking-btn',
    'head-booking-btn',
    'mt-4 rounded-0',
    { vibrating: isVibrating },
  );

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  useEffect(() => {
    const toggleVibration = () => {
      setVibrating((prevVibrating) => !prevVibrating);
    };
    const nextInterval = isVibrating ? 1000 : 4000;
    const toggleInterval = setInterval(() => {
      toggleVibration();
    }, nextInterval);

    return () => clearInterval(toggleInterval);
  }, [isVibrating]);

  return (
    <header id="/" className="main-header bg-light vh-100">
      <Background />
      <main
        className="main-content main-content-animation d-flex flex-column align-items-center"
      >
        <p className="text-content color-light text-center m-0">
          {t('header.text')}
        </p>
        <button
          type="button"
          aria-label={t('ariaLabels.bookingBtn')}
          className={buttonClasses}
          onClick={handleWidgetShow}
        >
          <span>{t('header.onlineBooking')}</span>
        </button>
      </main>
    </header>
  );
};

export default Header;
