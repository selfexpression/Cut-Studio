import React from 'react';
import {
  Row, Col, Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@reactuses/core';
import { ParallaxBanner } from 'react-scroll-parallax';
import backgroundWide from '../assets/back-i.avif';
import backgroundMobile from '../assets/back-i-m.webp';
import backgroundTablet from '../assets/back-i.jpg';
import '../styles.css';

const Header = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 420px)');
  const isTablet = useMediaQuery('(max-width: 859px)');
  const isWide = useMediaQuery('(min-width: 860px)');
  const contentPosition = isWide
    ? 'align-items-center justify-content-end'
    : 'align-items-end justify-content-center';
  const btnWidth = isWide ? 'w-50' : 'w-60';
  const sizes = [isMobile, isTablet, isWide];
  const isTrueSize = sizes.indexOf(true);
  const mappingSizeIndex = {
    0: 'isMobile',
    1: 'isTablet',
    2: 'isWide',
  };
  const size = mappingSizeIndex[isTrueSize];
  const mappingSize = {
    isMobile: backgroundMobile,
    isTablet: backgroundTablet,
    isWide: backgroundWide,
  };
  const backgroundImage = mappingSize[size];

  return (
    <section id="/" className="bg-light">
      <ParallaxBanner
        layers={[
          {
            image: backgroundImage,
            speed: -30,
            // scale: [1, 1.2],
            expanded: false,
          },
        ]}
        className={`parallax-header p-0 d-flex ${contentPosition}`}
      >
        <Row className="text-center m-5 text-header">
          <Col className="m-0 text-center">
            <p className="description m-0 p-0">{t('header.description1')}</p>
            <p className="description">{t('header.description2')}</p>
            <Button
              variant="outline-light"
              size="sm"
              className={`${btnWidth} btn-online-booking mb-5 rounded-0`}
            >
              <span className="register">{t('header.onlineBooking')}</span>
            </Button>
          </Col>
        </Row>
      </ParallaxBanner>
    </section>
  );
};

export default Header;
