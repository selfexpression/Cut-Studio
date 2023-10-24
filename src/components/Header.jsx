import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@reactuses/core';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useDispatch } from 'react-redux';
import { actions } from '../slices/index.js';
import backgroundWide from '../assets/backgrounds/back-i.avif';
import backgroundMobile from '../assets/backgrounds/back-i-m.webp';
import backgroundTablet from '../assets/backgrounds/back-i.jpg';

const getBackgroundImage = (sizes, images) => {
  const isTrueSize = sizes.indexOf(true);
  const mappingSizeIndex = {
    0: 'isMobile',
    1: 'isTablet',
    2: 'isWide',
  };
  const size = mappingSizeIndex[isTrueSize];
  const mappingSize = {
    isMobile: images.backgroundMobile,
    isTablet: images.backgroundTablet,
    isWide: images.backgroundWide,
  };

  return mappingSize[size];
};

const images = {
  backgroundMobile,
  backgroundTablet,
  backgroundWide,
};

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 420px)');
  const isTablet = useMediaQuery('(max-width: 859px)');
  const isWide = useMediaQuery('(min-width: 860px)');
  const contentPosition = isWide
    ? 'align-items-center justify-content-end'
    : 'align-items-end justify-content-center';
  const sizes = [isMobile, isTablet, isWide];
  const backgroundImage = getBackgroundImage(sizes, images);

  const handleWidgetShow = () => {
    dispatch(actions.bookingShow());
  };

  return (
    <section id="/" className="bg-light">
      <ParallaxBanner
        layers={[
          {
            image: backgroundImage,
            speed: -30,
            expanded: false,
          },
        ]}
        className={`parallax-banner d-flex ${contentPosition}`}
      >
        <div className="text-center m-5 absolute">
          <div className="m-0 text-center">
            <p className="text m-0 p-0">{t('header.text1')}</p>
            <p className="text">{t('header.text2')}</p>
            <button
              type="button"
              aria-label="booking-button"
              className="btn-online-booking head-booking-btn mb-5 rounded-0"
              onClick={handleWidgetShow}
            >
              <span>{t('header.onlineBooking')}</span>
            </button>
          </div>
        </div>
      </ParallaxBanner>
    </section>
  );
};

export default Header;
