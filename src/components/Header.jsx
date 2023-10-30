import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/index.js';
import useScrollPosition from '../hooks/index.js';
import background from '../assets/backgrounds/index.js';
import stockBackground from '../assets/backgrounds/back-image-1920.jpg';

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { scrollY } = useScrollPosition();

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  const translateBanner = `translate3d(0px, -${scrollY}px, 0px)`;
  const translateLayer = `translate3d(0px, calc(${scrollY}px / 2), 0px)`;

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
          />
        ))}
        <img
          src={stockBackground}
          alt="background"
          className="parallax-mirror"
          style={{ transform: translateLayer }}
        />
      </picture>
      <main className="text-center">
        <p className="text-content main-text m-0">{t('header.text1')}</p>
        <button
          type="button"
          aria-label="booking-button"
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
